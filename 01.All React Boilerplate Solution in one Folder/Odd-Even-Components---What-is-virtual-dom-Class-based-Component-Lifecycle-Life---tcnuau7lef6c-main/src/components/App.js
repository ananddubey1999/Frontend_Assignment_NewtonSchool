import React from 'react'
import '../styles/App.css';

class Odd extends React.Component {

  render() {
    return (
      <div id="odd">
        I am odd
      </div>
    )
  }
}

class Even extends React.Component {

  render() {
    return (
      <div id="even">
        I am even
      </div>
    )
  }
}
class App extends React.Component {
  handleChange(){
    this.setState({even: !this.state.even})
    console.log(!this.state.even?"Odd is unmounted":"Even is unmounted");
  }
  constructor(props){
    super(props)
    this.state = {even: true}
    this.handleChange =  this.handleChange.bind(this)
  }
  render() {
    return (
      <div id="main">
        {this.state.even ? <Even /> : <Odd />}

        <button id="toggle" onClick={this.handleChange}>Change</button>
      </div>
    )
  }

}


export default App;
