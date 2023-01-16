import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	    this.state = {
	    text: "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",
		    click : 0
	    
	    }
	};

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
	<button id="click" onClick={() => this.setState({count: this.state.count + 1 })}>Button</button>
    <h6 id="para">{this.state.text}</h6>
    		</div>
    	);
    }
}


export default App;

