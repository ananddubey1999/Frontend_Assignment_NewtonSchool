import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div id="home-div">
      <ul>
        <li>
          <Link to="/"><h2 id="home-item">Home</h2></Link>
          
        </li>
        <li>
          <Link to="/topics"><h2 id="topics-item">Topics</h2></Link> 
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Home;
