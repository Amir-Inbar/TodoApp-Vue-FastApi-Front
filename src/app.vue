<template>
  <section class="app-container container">
    <app-header/>
    <router-view/>
  </section>
</template>

<script>
import appHeader from './components/AppHeader.vue'

export default {
  name: 'app',
  created() {
    this.$store.dispatch({type: 'loadTodos'})
  },
  components: {
    appHeader,
  },
}
</script>
