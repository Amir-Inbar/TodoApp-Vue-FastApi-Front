import { createStore } from 'vuex'
import todoStore from './modules/todo-module.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todoStore,
  },
})

export default store
