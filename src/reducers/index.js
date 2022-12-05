import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './TodoReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export default rootReducer;
