import React, { useState } from "react";
const App = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div id="main">
      <h1 id="marco-polo">{flag ? "Marco" : "Polo"}</h1>
      <button id="marco-polo-toggler" onClick={() => setFlag(!flag)}>
        {flag ? "Polo" : "Marco"}
      </button>
    </div>
  );
};

export default App;
