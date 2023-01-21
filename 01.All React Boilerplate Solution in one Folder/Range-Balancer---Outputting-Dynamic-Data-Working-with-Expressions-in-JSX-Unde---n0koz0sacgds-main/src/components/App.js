import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [a,setA] = useState(0)
  const [b,setB] = useState(50)
  const [t,setT] = useState(50)
  return (
    <div id="main">

      <div id="max-sum-holder">
        Input max sum:-
        <input type={"number"} value={t} onChange={e=> setT(e.target.value)}/>
      </div>
      <div id="range-a-holder">
        <input type={"range"} value={a} onChange={(e)=>setA(e.target.value)} max={t-b}/>
        <span id="range-a-value">{a}</span>
      </div>
      <div  id="range-b-holder">
        <input type={"range"} value={b} onChange={(e)=>setB(e.target.value)} max={t-a}/>
        <span id="range-b-value">{b}</span>
      </div>
      <div id="sum">
            {[a,b].map(Number).reduce((sum,cur)=>sum+cur,0)}
      </div>
    </div>
  )
}


export default App;
