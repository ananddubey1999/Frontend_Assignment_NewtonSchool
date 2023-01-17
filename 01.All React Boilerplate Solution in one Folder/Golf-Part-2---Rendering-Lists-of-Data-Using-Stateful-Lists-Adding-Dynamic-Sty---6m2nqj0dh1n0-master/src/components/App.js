import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const [renderComp, setRenderComp] = useState(false);

  const updateXY = (newx,newy) => {
    setX(newx);
    setY(newy);
    setBallPosition({
      left: newx+"px",
      top: newy+"px"
    });
  }
  
  useEffect(() => {
    const keyListener = ((evt) => {
      if(setRenderBall){
        if(evt.keyCode === 37){
          updateXY(x-5,y);
        }
        if(evt.keyCode === 38){
          updateXY(x,y-5);
        }
        if(evt.keyCode === 39){
          updateXY(x+5,y);
        }
        if(evt.keyCode === 40){
          updateXY(x,y+5);
        }
      }
    });
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown",keyListener);
  });

  const reset = () => {
    setRenderBall(false);
  };
  const start = () => {
    setRenderBall(true);
  }
  // const changeState = () => {
  //   setRenderBall(true);
  // }
  // const updateBallPosition = () => {
  //   if ((x + "px") != ballPosition.left || (y + "px") != ballPosition.top)
  //     setBallPosition({ left: x + "px", top: y + "px" });
  // }
  const renderChoice = () => {
    // return renderBall ? <div className="ball"></div> : <div className="ball"></div>;
    return renderBall ? (
    <div className="ball" style={ballPosition}></div>
    ) : (
    <button className="start" onClick={start}>
      Start
      </button>
    );
  };
  

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
