import React, { Component, useState, useEffect, useCallback } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });

  const start = () => {
    setRenderBall(!renderBall);
  };

  const keyHandler = (event) => {
    let ballPositionClone = { ...ballPosition };

    if (event.keyCode === 37) {
      ballPositionClone.left =
        Number(ballPosition.left.slice(0, ballPosition.left.indexOf("p"))) -
        5 +
        "px";
    } else if (event.keyCode === 39) {
      ballPositionClone.left =
        Number(ballPosition.left.slice(0, ballPosition.left.indexOf("p"))) +
        5 +
        "px";
    } else if (event.keyCode === 38) {
      ballPositionClone.top =
        Number(ballPosition.top.slice(0, ballPosition.top.indexOf("p"))) -
        5 +
        "px";
    } else if (event.keyCode === 40) {
      ballPositionClone.top =
        Number(ballPosition.top.slice(0, ballPosition.top.indexOf("p"))) +
        5 +
        "px";
    }
    // ballPositionClone.left = (Number(ballPosition.left.slice(0,ballPosition.left.indexOf("p")))+5)+"px";
    setBallPosition(ballPositionClone);
    // console.log(ballPosition);
  };

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  });

  const reset = () => {
    setRenderBall(!renderBall);
    setBallPosition({ left: "0px", top: "0px" });
  };
  const renderChoice = () => {};

  let compo;
  if (renderBall) {
    compo = (
      <div
        className="ball"
        style={{ left: ballPosition.left, top: ballPosition.top }}
      ></div>
    );
  } else {
    compo = (
      <button onClick={start} className="start">
        Start
      </button>
    );
  }

  return (
    <div className="playground">
      {compo}
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
