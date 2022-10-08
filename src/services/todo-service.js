import {storageService} from './storage-service.js'
import axios from "axios";

const baseUrl = "https://todoapp-fastapi-backend.herokuapp.com/"


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
    console.log(todos)
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
    console.log(savedTodo)
    return savedTodo
}

async function update(todo) {
    const {data: updatedTodo} = await axios.put(`${baseUrl}todo/${todo.id}`, todo)
    console.log(updatedTodo)
    return updatedTodo
}

function getEmptyTodo() {
    return {
        title: null,
        description: null,
        doneAt: null,
        status: null,
        createdAt:Date.now()
    }
}
