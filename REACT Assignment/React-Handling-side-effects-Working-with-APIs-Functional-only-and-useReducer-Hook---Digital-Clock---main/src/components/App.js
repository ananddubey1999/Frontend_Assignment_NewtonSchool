import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  let date = new Date();
  const [time, settime] = useState(date.toLocaleString());
  useEffect(() => {}, []);
  setInterval(() => {
    date = new Date();
    settime(date.toLocaleString());
  }, 1000);

  return (
    <div id="main">
      <div className="date-time">{time}</div>
    </div>
  );
};

export default App;
