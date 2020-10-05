
let id=5;
const initialState=[
    {
        id:1,
        title:'Enrigistrer le tutoriel',
        completed:false
    },
    {
        id:2,
        title:'Préparer le tutoriel',
        completed:false
    },
    {
        id:3,
        title:'Comprendre React et Redux',
        completed:false
    },
    {
        id:4,
        title:'Pratiquer sur Redux et Context',
        completed:false
    },
    {
        id:5,
        title:'Préparer le tutoriel sur dispatch',
        completed:false
    }
]

// Mes Actions
export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
export const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION';
export const  DELETE_TODO_ACTION = 'DELETE_TODO_ACTION'

export const todosReducer= (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO_ACTION:
            return [ ...state,
                {
                id:++id,
                completed:false,
                ...action.playload
            }
        ]    
        case UPDATE_TODO_ACTION:
            return state.map(todo=>{
                if (todo.id===action.playload.id){
                    return {...todo,...action.playload}
                }
                else{
                    return todo
                }
            })
            case DELETE_TODO_ACTION:
                return state.filter(todo => todo.id !== action.playload)
                
                default:
                 return  state
            
    }

}