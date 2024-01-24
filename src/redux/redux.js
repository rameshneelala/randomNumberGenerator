// src/redux.js
import { configureStore } from '@reduxjs/toolkit';
import randomNumberReducer from './randomNumberSlice';

export const store = configureStore({
  reducer: {
    randomNumber: randomNumberReducer,
  },
});
