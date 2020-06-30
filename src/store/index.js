import { createStore } from 'redux';
import reducer from '../reducers/index.js';

const initialState = {
  items: [],
  types: [],
  contacts: {
    phone1: '',
    phone2: '',
    email: ''
  }
}

const store = createStore(reducer, initialState);

export default store;
