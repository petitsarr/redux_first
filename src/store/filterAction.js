import { UPDATE_FILTER} from './filterReducer';

export const setFilterAction =(value)=>({
  type: UPDATE_FILTER,
  playload: value
})