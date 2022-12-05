import { legacy_createStore as createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import reducer from '../reducers';

const initValues = {
  count: 5,
  step: 1,
  tasks: [
    { id: uuidv4(), body: 'test0', isDone: false },
    { id: uuidv4(), body: 'test1', isDone: false },
  ],
};

const store = createStore(reducer, initValues);
// Можно initValues перенести в reducer
// указав: const reducer = (state=initValue, action) => {...}
// const store = createStore(reducer);

export default store;
