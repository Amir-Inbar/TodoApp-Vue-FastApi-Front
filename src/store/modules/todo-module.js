import {todoService} from '../../services/todo-service'

export default {
    state: {
        todos: null,
    },
    getters: {
        todos(state) {
            return state.todos
        },
    },
    mutations: {
        setTodos(state, {todos}) {
            state.todos = todos
        },
        removeTodo(state, {id}) {
            const idx = state.todos.findIndex((t) => t.id === id)
            state.todos.splice(idx, 1)
        },
        saveTodo(state, {todo}) {
            console.log(todo)
            const idx = state.todos.findIndex((t) => t.id === todo.id)
            if (idx !== -1) state.todos.splice(idx, 1, todo)
            else state.todos.unshift(todo)
        },
    },
    actions: {
        async loadTodos({commit}) {
            try {
                const todos = await todoService.query()
                commit({type: 'setTodos', todos})
            } catch (e) {
                console.log('can\'t load todos')
            }
        },
        async removeTodo({commit}, {id}) {
            try {
                await todoService.remove(id)
                commit({type: 'removeTodo', id})
            } catch (e) {
                console.log(e)
            }
        },
        async saveTodo({commit}, {todo}) {
            try {
                if (todo.id) {
                    await todoService.update(todo)
                } else {
                    await todoService.save(todo)
                }
            } catch (e) {
                console.log(e)
            } finally {
                commit({type: 'saveTodo', todo})
            }
        },
        async doneTodo({commit}, {todo}) {
            console.log(todo)
            const updatedTodo = JSON.parse(JSON.stringify(todo))
            updatedTodo.doneAt = Date.now()
            updatedTodo.status = 'done'
            try {
                await todoService.update(updatedTodo)
            } catch (e) {
                console.log(e)
            } finally {
                commit({type: 'saveTodo', todo:updatedTodo})
            }
        },
    },
}
