import axios from "axios";

const baseUrl = import.meta.env.MODE === 'development' ? 'http://localhost:8000/' : import.meta.env.VITE_APP_API_CALL
export const todoService = {
    query,
    getById,
    remove,
    save,
    getEmptyTodo,
    update
}


async function query() {
    const {data: todos} = await axios.get(`${baseUrl}todo/`)
    return todos
}

async function getById(todoId) {
    const {data: todo} = await axios.get(`${baseUrl}todo/${todoId}/`)
    return todo
}

async function remove(todoId) {
    const {data: todo} = await axios.delete(`${baseUrl}todo/${todoId}/`)
    return todo
}

async function save(todo) {
    const {data: savedTodo} = await axios.post(`${baseUrl}todo/`, todo)
    return savedTodo
}

async function update(todo) {
    const {data: updatedTodo} = await axios.put(`${baseUrl}todo/${todo.id}`, todo)
    return updatedTodo
}

function getEmptyTodo() {
    return {
        title: null,
        description: null,
        doneAt: null,
        status: null,
        createdAt: Date.now()
    }
}
