import React, { Component, useState } from "react";
const initialState = {
  input1: "",
  input2: "",
  text: ""
};
function relation(num) {
  switch (num % 6) {
    case 1:
      return "Friends";
    case 2:
      return "Love";
    case 3:
      return "Affection";
    case 4:
      return "Marriage";
    case 5:
      return "Enemy";
    case 0:
      return "Siblings";
    default:
      return "Please Enter valid input";
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.calculate = this.calculate.bind(this);
    this.restart = this.restart.bind(this);
  }
  calculate = () => {
    let str = this.state.input1.toLowerCase();
    let str1 = this.state.input2.toLowerCase();
    let result;
    if (str.length > 0 && str1.length > 0) {
      let count = 0;
      for (let i of str) {
        if (str1.indexOf(i) >= 0) {
          count++;
          i = 1;
        }
      }
      const lenght = str.length + str1.length - count * 2;
      result = relation(lenght);
    } else {
      result = relation(-1);
    }
    this.setState({ ...this.state, text: result });
  };
  restart = () => {
    this.setState(initialState);
  };
  render() {
    return (
      <div id="main">
        <h3 data-testid="answer">{this.state.text}</h3>
        <input
          type="text"
          data-testid="input1"
          value={this.state.input1}
          onChange={(e) =>
            this.setState({ ...this.state, input1: e.target.value })
          }
        />
        <input
          type="text"
          data-testid="input2"
          value={this.state.input2}
          onChange={(e) =>
            this.setState({ ...this.state, input2: e.target.value })
          }
        />
        <button data-testid="calculate_relationship" onClick={this.calculate}>
          Calculate Relationship Future
        </button>
        <button data-testid="clear" onClick={this.restart}>
          Clear
        </button>
      </div>
    );
  }
}
export default App;
