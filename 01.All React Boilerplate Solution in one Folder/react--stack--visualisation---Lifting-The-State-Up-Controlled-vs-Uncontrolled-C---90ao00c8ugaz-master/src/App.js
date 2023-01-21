import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Element from './components/element';

function App() {

  const [text, setText] = useState();
  const [arr, setArr] = useState([]);
  const [popEl, setPopEl] = useState('')
  const [topEl, setTopEl] = useState('')

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const handlePush = () => {
    setArr([text,...arr]);
  }

  const handlePop = () => {
    if (arr.length == 0) {
      window.alert('Stack is empty')
    }else{
    setPopEl(arr.shift())
    }
  }

  const handleTop = () => {
    if (arr.length == 0) {
      window.alert('Stack is empty')
    }else{
    setTopEl(arr[0])
    }
  }

  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          {arr.map((item,index)=>  <Element key={index} item={item} />)}
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handlePush}>
              PUSH
            </button>
            <input type="text" className="form-control" onChange={handleInput}/>
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handlePop}>
              POP
            </button>
            <input type="text" disabled className="form-control" value={popEl} />
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleTop}>
              TOP
            </button>
            <input type="text" disabled className="form-control" value={topEl}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
