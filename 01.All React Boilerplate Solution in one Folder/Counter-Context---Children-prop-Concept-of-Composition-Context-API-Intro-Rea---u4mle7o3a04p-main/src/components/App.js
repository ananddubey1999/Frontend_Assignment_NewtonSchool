import React from 'react'
import { CounterStateContext } from '../counterContext';
import '../styles/App.css';
import { CounterList } from './CounterList';
const App = () => {

  return (
    <CounterStateContext>
      <div id="main">
        <CounterList />
      </div>
    </CounterStateContext>

  )
}


export default App;
