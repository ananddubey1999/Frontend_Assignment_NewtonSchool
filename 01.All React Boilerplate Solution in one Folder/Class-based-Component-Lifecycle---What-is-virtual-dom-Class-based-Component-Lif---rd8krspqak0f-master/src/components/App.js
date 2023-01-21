import React from 'react'
import '../styles/App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
// write your code here
      this.tick.bind(this),1000
    );
  }
    
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div id='main'>
        <h1>Welcome to Newton School</h1>
        <div id='timer'>{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}



export default App;
