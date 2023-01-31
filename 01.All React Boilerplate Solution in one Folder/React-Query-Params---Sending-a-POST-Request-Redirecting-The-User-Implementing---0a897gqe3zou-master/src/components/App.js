import React from 'react'
import '../styles/App.css';


const App = () => {
  //Write your code here
  const para = new URLSearchParams(window.location.search);
  const pid = para.get("id");
  const pname = para.get("name");
  const pdig = para.get("designation");
  console.log(pid,pname,pdig)
  return(
    <div className='details'>
       Employee {pid} named {pname} works as {pdig}
    </div>
  )
}

export default App;
