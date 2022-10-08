<template>
  <section v-if="todoToEdit" class="todo-edit py-2">
    <form @submit.prevent="saveTodo" class="form">
      <div class="form-control">
        <label for="title">Title</label>
        <input required v-model="todoToEdit.title" id="title"
               type="text" class="form-input" placeholder="Enter your todo Title here..."
        />
      </div>
      <div class="form-control">
        <label for="desc">Description</label>
        <input required v-model="todoToEdit.description" id="desc" type="text" class="form-input"
               placeholder="Enter your todo description here..."
        />
      </div>
      <div>Status</div>
      <div class="form-control flex">
        <label :for="fieldName" class="form-input" v-for="fieldName in ['open','in progress','done']">{{ fieldName }}
          <input :id="fieldName" type="radio" name="status" v-model="todoToEdit.status" :value="fieldName"/>
        </label>
      </div>
      <div class="form-control" v-if="todoToEdit.doneAt">
        <label for="done">Description</label>
        <input disabled type="text" id="done" class="form-input" v-model="todoToEdit.doneAt"
               placeholder="Enter your todo description here..."
        />
      </div>
      <div class="form-control">
        <label>Created At</label>
        <input disabled type="text" class="form-input" :value="new Date(todoToEdit.createdAt).toLocaleString()"
        />
      </div>
      <div class="btn-group">
        <button class="btn btn-info" type="submit">save</button>
        <button @click="goBack" class="btn btn-danger-text">go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import {todoService} from '../services/todo-service'

export default {
  name: 'todo-edit',
  data() {
    return {
      todoToEdit: null,
    }
  },
  async created() {
    const {id} = this.$route.params
    const {getById, getEmptyTodo} = todoService
    this.todoToEdit = id ? await getById(id) : getEmptyTodo()
  },
  methods: {
    goBack() {
      this.$router.push('/todo')
    },
    async saveTodo() {
      await this.$store.dispatch({type: 'saveTodo', todo: this.todoToEdit})
      await this.$router.push('/todo')
    },
  },
}
</script>
