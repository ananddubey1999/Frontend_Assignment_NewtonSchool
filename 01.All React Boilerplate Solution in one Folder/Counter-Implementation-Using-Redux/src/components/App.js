import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, subNumber } from '../actions/action';

function App() {
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch()
  return (
    <div id='main'>
        <div data-testid='counter'>{counter}</div>
        <button onClick={()=>dispatch(addNumber())}>+</button>
        <button onClick={()=>dispatch(subNumber())}>-</button>
    </div>
  );
}

export default App;
