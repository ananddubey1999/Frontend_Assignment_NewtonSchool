import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
const[counter, setCounter] = useState(0);
const[state, setState] = useState('square');
const[result, setResult] = useState([]);


const handleShapes = (e) => {
  setState(e.target.value);
}

const handleSubmit = () => {

    setCounter(counter + 1);

    return(
    state === 'circle' ? 
    <div className='circle'>{counter}</div>
     :
     <div className='square'>{counter}</div>
    )
    
}

const handleClick = () => {
  setResult([...result,handleSubmit()]);
}

  return (
    <div id="main">
      <div id="shape-creator">
        <select id='shape' value={state} onChange={handleShapes}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
      <button id='btn' onClick={handleClick}>Add Shape</button>
      </div>
      <div id="shapes-holder">
      {result.map((element) => element)}        
      </div>
    </div>
  )
}


export default App;
