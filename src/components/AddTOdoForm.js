import React, { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { addTodoAction } from '../store/todosActions'

export  function AddTOdoForm() {
const dispatch = useDispatch()
const input = useRef(null)

const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(addTodoAction(input.current.value))
    input.current.value ='';
    input.current.focus()
}

    return (
        <form onSubmit ={handleSubmit} >
        <input type = 'text' placeholder ='Tache' ref = {input} />
        <button>Ajouter</button>
        </form>
    )
}
