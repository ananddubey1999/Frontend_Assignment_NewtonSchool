import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 })
  const { counter } = state;
  return (
    <div id="main">
      <span id="counter">{counter}</span>
      <button id="increment-btn" onClick={() => dispatch({ type: 'INCREMENT' })}>
        +
      </button>
      <button id="decrement-btn" onClick={() => dispatch({ type: 'DECREMENT' })}>
        -
      </button>
    </div>
  )
}


export default App;
