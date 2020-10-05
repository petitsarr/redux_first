import React from 'react'

const TodoItem =({todo,onToggle,onDelete})=>{
    return(
        <li>
        <label>
        <input type ='checkbox' checked={todo.completed}  onChange={()=>onToggle(todo)}/>
      
        {todo.title}
        <button onClick={()=>onDelete(todo)}>x</button>
        </label>
        </li>
     
    )

}
export default TodoItem;