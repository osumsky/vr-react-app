import { legacy_createStore as createStore } from 'redux';
import reducer from '../reducers';

const initValues = { count: 5, step: 1 };

const store = createStore(reducer, initValues);

export default store;
