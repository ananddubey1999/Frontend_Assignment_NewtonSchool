import React from 'react'
import '../styles/App.css';
import styles from '../styles/appStyles.module.css';
const App = () => {
  const heading = 'React Inline and Module CSS';
  
  return (
    <div id="main">
      <h1 className='heading'>{heading}</h1>
      <h1 className={styles.success} >Success</h1>
      <h1 id='error' style={{color:'red', fontSize:"50px"}}>Error</h1>
    </div>
  )
}


export default App;
