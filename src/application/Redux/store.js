// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  token: localStorage.getItem('token') || null,
  userId: localStorage.getItem('userId') || null,
};

// Reducer
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload.token, userId: action.payload.userId };
    case 'REMOVE_TOKEN':
      return { ...state, token: null, userId: null };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(
  tokenReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enable Redux DevTools
);

export default store;
