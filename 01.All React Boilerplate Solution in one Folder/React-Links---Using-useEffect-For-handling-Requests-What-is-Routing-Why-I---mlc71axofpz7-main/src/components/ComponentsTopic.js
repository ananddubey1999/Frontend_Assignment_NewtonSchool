import React from "react";
import { useHistory } from "react-router-dom";

const ComponentsTopic = () => {
  const history = useHistory();
  return (
    <div id="components-div">
      <h3>Components in React</h3>
      <button onClick={()=> history.goBack()} id="components-back-button">
        Back
      </button>
    </div>
  );
};

export default ComponentsTopic;
