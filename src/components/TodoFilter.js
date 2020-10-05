import React from 'react';
import {connect} from 'react-redux';
import { setFilterAction } from '../store/filterAction';
import { filterSelector } from '../store/filterSelector';

export function TodoFilter ({myvalue,onChange}){
    return <div>
    
    <button disabled={myvalue===null} onClick={ ()=>onChange(null)}>AUCUN FILTRE </button>
    <button disabled={myvalue===true} onClick={ ()=>onChange(true)}>COMPLETE</button>
    <button disabled={myvalue===false} onClick={ ()=>onChange(false)}> A FAIRE</button>
    </div>
}


export const TodoFilterStore = connect(
    state =>({
        myvalue: filterSelector(state)
    }),
    dispatch =>({
        onChange:(value)=>dispatch(setFilterAction(value))
    })
)(TodoFilter) 
