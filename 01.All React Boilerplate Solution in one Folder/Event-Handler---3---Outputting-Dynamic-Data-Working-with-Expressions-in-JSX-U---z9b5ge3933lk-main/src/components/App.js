import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleInput = (event) =>{
   console.log('Input in #'+ event.target.id+ ' is ' +event.target.value)
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input onChange={handleInput} id="text-input" type={'text'} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input onChange={handleInput} id="num-input"  type={'number'} />
      <br/>
    </div>
  )
}


export default App;
