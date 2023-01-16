import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
  const initialState = {
  count:0
  }
const [state,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div id="main">
<button id='increment-btn' onClick={() => dispatch({type:'increment'})}>+</button>
      <span id='counter'>{state.count}</span>
      <button id='decrement-btn' onClick={() => dispatch({type:'decrement'})}>-</button>
    </div>
  )
}


export default App;
