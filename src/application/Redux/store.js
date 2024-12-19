// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  token: localStorage.getItem('token') || null,
};

// Reducer
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    case 'REMOVE_TOKEN':
      return { ...state, token: null };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(tokenReducer);

export default store;
