<template>
  <section class="todo-filter">
    <input
      v-model="filterBy.vendor"
      @input="setFilter"
      type="text"
      class="form-input"
      placeholder="Search vendor..."
    />
  </section>
</template>

<script>
export default {
  name: 'todo-filter',
  data() {
    return {
      filterBy: {
        vendor: '',
      },
    }
  },
  methods: {
    setFilter() {
      this.$emit('setFilter', this.filterBy)
    },
  },
}
</script>
