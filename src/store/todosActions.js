import {ADD_TODO_ACTION, UPDATE_TODO_ACTION} from './todosReducer'
import {DELETE_TODO_ACTION} from './todosReducer'

//Cette fonction prendra en paramétre notre todo
export  const ToggleTodoAction =(todo)=>({
    type: UPDATE_TODO_ACTION,
    playload :{
        ...todo,
        completed: !todo.completed}

})

// Action supprimé
export const deleteTodoAction =(todo)=>({
    type: DELETE_TODO_ACTION,
    playload: todo.id

})

// Ajouter une tache
export const addTodoAction =(title)=>({
    type : ADD_TODO_ACTION ,
    playload : {title}
})