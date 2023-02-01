import React, { useState, useEffect, Fragment } from "react";
import '../styles/App.css';

import List from "./List";

const App = () => {

  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);


  const onButtonClick = () => {
   setList(Array.from({ length: `${value}` }, (v, i) => i))
  };


  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div id="main">

      <input id="input" onChange={onInputChange} />
      <button id="button" onClick={onButtonClick}>Click</button>
      <ul id="list">

        {

          list.map((item,i) => {
            return <List listx={i+1}/>
          })
        }

      </ul>
    </div>
  );
};

export default App;
