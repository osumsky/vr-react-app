import { legacy_createStore as createStore } from 'redux';
import reducer from '../reducers';

const initValues = { count: 5, step: 1 };

const store = createStore(reducer, initValues);
// Можно initValues перенести в reducer
// указав: const reducer = (state=initValue, action) => {...}
// const store = createStore(reducer); 

export default store;
