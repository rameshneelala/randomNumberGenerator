// src/redux/randomNumberSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const randomNumberSlice = createSlice({
  name: 'randomNumber',
  initialState: {
    value: 0,
  },
  reducers: {
    generateRandomNumber: (state) => {
      state.value = Math.floor(Math.random() * 101);
    },
  },
});

export const { generateRandomNumber } = randomNumberSlice.actions;

export default randomNumberSlice.reducer;
