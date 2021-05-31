import {createStore} from 'redux'
import todoReducer from './Reducer';
export const store = createStore(todoReducer);