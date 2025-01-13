import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const initialState = {
  token: localStorage.getItem('token') || null,
  userId: localStorage.getItem('userId') || null,
};

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


const rootReducer = combineReducers({
  token: tokenReducer, 
  user: userReducer,   
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production', 
});

export default store;
