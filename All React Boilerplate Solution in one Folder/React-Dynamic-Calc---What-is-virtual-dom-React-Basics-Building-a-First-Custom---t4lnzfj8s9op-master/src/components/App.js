import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [output, setOutput] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    setOutput(Number(value1) + Number(value2));
  }, [value1, value2]);

  return (
    <div id="main">
      <input
        id="input1"
        type="number"
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
      />
      +
      <input
        id="input2"
        type="number"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <p id="result">{output}</p>
    </div>
  );
};

export default App;
