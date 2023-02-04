
import React, { useState, useMemo } from "react";
import expensiveOperation from "../function.js";
import "../styles/App.css";

const App = () => {
  return <OptimizeTheOperation />;
};

const OptimizeTheOperation = () => {
  const [number, setNumber] = useState(1);
  const array = useMemo(() => expensiveOperation(number), [number]);

  const submitHandler = (event) => {
    event.preventDefault();
    setNumber(parseInt(event.target.num.value, 10));
  };

  return (
    <div>
      Enter the number:
      <form onSubmit={submitHandler}>
        <input id="num" defaultValue={number} />
        <button id="submit" type="submit">
          Click me
        </button>
      </form>
      <br />
      Result of expensive operation:
      <ul id="result">
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
