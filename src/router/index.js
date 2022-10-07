import { createRouter, createWebHashHistory } from 'vue-router'
import todoApp from '../views/TodoApp.vue'
import todoEdit from '../views/TodoEdit.vue'
import homepage from "@/views/HomePage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: homepage,
    },
    {
      path: '/todo',
      name: 'todo-app',
      component: todoApp,
    },
    {
      path: '/todo/edit/:id?',
      name: 'todo-edit',
      component: todoEdit,
    },
  ],
})

export default router
