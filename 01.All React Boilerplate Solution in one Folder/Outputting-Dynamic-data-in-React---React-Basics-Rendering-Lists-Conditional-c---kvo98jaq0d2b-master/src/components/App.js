import React, { useState, useEffect } from 'react'
import '../styles/App.css';
const App = () => {
  //code here
  const [input, setInput] = useState('');
  const [blank, setBlank] = useState('____');
  
  return (
    <div id="main">
      <input id='input' onChange={(e) => setInput(e.target.value)}></input>
      <button id='button' onClick={() => setBlank(input)}>Click</button>
      <p id='text'> Hello my name is {blank} and I study at Newton School</p>
    </div>
  )
}


export default App;
