// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateRandomNumber } from './redux/randomNumberSlice';
import './App.css';

function App() {
  const randomNumber = useSelector((state) => state.randomNumber.value);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Random Number Generator</h1>
      <div id="output" className='random'>{randomNumber}</div>
      <button className='number' onClick={() => dispatch(generateRandomNumber())}>Generate</button>
    </div>
  );
}

export default App;
