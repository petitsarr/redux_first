import {combineReducers,createStore} from 'redux';
import {todosReducer} from './todosReducer';
import {filterReducer} from './filterReducer'

const store = createStore(
    combineReducers({
        todos: todosReducer,
        filter: filterReducer,
    
    }),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



export default store;