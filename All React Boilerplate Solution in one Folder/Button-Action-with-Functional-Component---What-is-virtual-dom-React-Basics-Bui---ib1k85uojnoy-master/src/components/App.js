import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [ele, setFlag] = useState("");
  
  function change(){
    //setFlag(true);
    setFlag(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
  }
  return (
    <>
    <div id="main">
      // Do not alter the main div
    </div>
    {ele}
    {/* <p id="para" className={flag ? "sho" : "hide"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> */}
    <button id="click" onClick={change}>show</button>
    </>
  );
}


export default App;
