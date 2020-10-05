import {createSelector} from 'reselect'
import { filterSelector } from './filterSelector'

// Cette fonction prendra en paramétre l'etat et qui retourne ce que l'on souhaite obtenir
 export const todosSelector =({todos})=>todos

 export const filteredTodosSelector = createSelector(
    todosSelector,
    filterSelector,
    (todos,filter)=>{
        if (filter === null){
            return todos
        }
        else{
            return todos.filter(todo=>todo.completed ===  filter)
        }
    }
 )





 /*
 export const filteredTodosSelector = ({todos,filter})=>{
     if (filter === null){
         return todos
     }
     else{
         return todos.filter(todo=>todo.completed ===  filter)
     }
 }
 */