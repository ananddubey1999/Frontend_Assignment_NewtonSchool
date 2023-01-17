import React, { useRef } from "react";

export default (props) => {
  const ref = useRef();

  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`
        };
        return (
          <div className="snake-dot" ref={ref} key={i} style={style}></div>
        );
      })}
    </div>
  );
};
