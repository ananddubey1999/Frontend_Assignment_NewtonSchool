import React,{useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [height , setHeight]=useState(320);
  const [width , setWidth]=useState(320);

  const handleChange1=(event)=>{
    setHeight(event.target.value)+"px"
  }
  const handleChange2=(event)=>{
    setWidth(event.target.value)+"px"
  }
  return (
    <div id="main">
        <input type="range" min="100" max="800" value={height} id="height-slider" onChange={handleChange1}></input>
        <div>{height}px</div>
        <input type="range" min="100" max="800" value={width} id="width-slider" onChange={handleChange2}></input>
        <div>{width}px</div>
        <img id='resizable-img' src='../src/image.jpeg' height={height} width={width} alt="resizable-img"/>
    </div>
  )
}


export default App;
