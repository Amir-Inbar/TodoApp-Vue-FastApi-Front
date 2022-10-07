<template>
  <ul class="todo-list clean-list grid gap-1">
    <todo-preview @doneTodo="doneTodo" @removeTodo="removeTodo" v-for="todo in todos" :todo="todo" :key="todo.id" />
  </ul>
</template>

<script>
import todoPreview from './TodoPreview.vue'

export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  components: {
    todoPreview,
  },
  methods: {
    removeTodo(todoId) {
      this.$emit('removeTodo', todoId)
    },
    doneTodo(todo) {
      this.$emit('doneTodo', todo)
    },
  },
}
</script>
