import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: "naman",
          percent: 60.0
        },
        {
          name: "ritesh",
          percent: 99.9431
        },
        {
          name: "hitesh",
          percent: 65.3365
        },
        {
          name: "shreya",
          percent: 80.64
        },
        {
          name: "ankur",
          percent: 78.897
        },
        {
          name: "vanshu",
          percent: 78.9876
        },
        {
          name: "krupal",
          percent: 85.3214
        }
      ]
    };
  }
  render() {
    return (
      <div id="main">
        {
          //Correct the percentage conditional for correct output
          this.state.list.map(function (item, index) {
            if (item.percent > 75) {
              return (
                //Conditional statement in the className of below div to give callName="bg-pink"
                //if the percent >= 90 else className = ""
                <div
                  key={index}
                  className={item.percent > 90 ? "bg-pink" : null}
                >
                  <div className="name">{item.name}</div>
                  <div className="percent">{item.percent.toFixed(2)}</div>
                </div>
              );
            }
          })
        }
      </div>
    );
  }
}

export default App;
