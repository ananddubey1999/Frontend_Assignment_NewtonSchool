import React from 'react'
import { useHistory } from 'react-router-dom'

const RenderingTopic = () => {
  const history = useHistory();
  return (
    <div id="rendering-div">
      <h3>Rendering in React</h3>
      <button onClick={()=> history.goBack()} id="rendering-back-button">
        Back
      </button>
    </div>
  )
}

export default RenderingTopic
