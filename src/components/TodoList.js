import React,{useCallback} from 'react'
import {connect,useSelector,useDispatch} from 'react-redux';
import {ToggleTodoAction} from '../store/todosActions'
import {filteredTodosSelector, todosSelector} from '../store/todosSelector'
import {deleteTodoAction}  from '../store/todosActions'
import TodoItem from './TodoItem'
import {UPDATE_TODO_ACTION}     from '../store/todosReducer'

 export const TodoList =({todos,onToggle,onDelete})=>{

return(
 
     <ul> { todos.map((todo)=>{
             return(
                <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id} />
             )
         }
            
           

            )

     }            
    </ul>
    )
        
        
}


// Le premier paramétre de cette fonction connect va etre une fonction qui prend en paramétre l'etat de mon store, en second paramétre on l'envoi une fonction 
// qui permet de mapper des dispatch au niveau  de mes props
// La fonction connect va renvoye une fonction à laquelle il faudra passe le composant que l'on souhaite decoré ici TodoList
/*
Maintenat lorsque je vais utilisé TodoListStore ca va puisé des todos dans notre store et les passe à mon composant TodoList  
*/ 

export const TodoListStore =()=>{
    //Le hook useSelector permet à notre composant d'extraire les données dont il a besoin de l'état du Store Redux.
const todos = useSelector(filteredTodosSelector)
//Nous avons besoin d'un moyen d'accéder uniquement à la fonction dispatch..
//Le hook useDispatch  fait cela pour nous et nous donne la méthode dispatch  réelle du Store Redux
const dispatch = useDispatch()

// L'évenement onToggle..
const onToggle = useCallback((todo)=>{
    dispatch(ToggleTodoAction(todo))
},[])

const onDelete = useCallback((todo)=>{
    dispatch(deleteTodoAction(todo))
},[])

return (<TodoList todos ={todos} onToggle={onToggle} onDelete={onDelete} />)

}

 
