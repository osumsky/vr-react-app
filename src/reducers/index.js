import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './TodoReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  users: userReducer,
});

export default rootReducer;
