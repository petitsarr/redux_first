export const UPDATE_FILTER = ' UPDATE_FILTER'

export const filterReducer =(state= null,action)=>{
    switch(action.type){
        case UPDATE_FILTER:
            return action.playload
        default:
            return state
    }
}