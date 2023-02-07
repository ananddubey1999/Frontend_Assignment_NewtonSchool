import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAmount, addNumber, handlelogin, handlelogout, subNumber } from '../actions/action';

export const LoggedInFunction =()=>{
  const dispatch=useDispatch()
  return(
    <div>
      <button onClick={()=>dispatch(handlelogin())}>Login</button>
    </div>
  )
}

export const LoggedOutFunction=()=>{
  const [val,setVal]=useState(2)
  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  return(
    <div>
      <div data-testid='counter'>{counter}</div>
      <button onClick={()=>dispatch(addNumber())}>+</button>
      <button onClick={()=>dispatch(subNumber())}>-</button>
      <input type="number" onChange={(e)=>setVal(parseInt(e.target.value))}/>
      <button onClick={()=>dispatch(addAmount(val))}>Add amount</button>
      <button onClick={()=>dispatch(handlelogout())}>Logout</button>
    </div>
  )
}

function App() {
  const islogged=useSelector(state=>state.islogged)
  return (
    <div id='main'>

      {islogged ? <LoggedOutFunction/> : <LoggedInFunction/>}
    </div>
  );
}

export default App;
