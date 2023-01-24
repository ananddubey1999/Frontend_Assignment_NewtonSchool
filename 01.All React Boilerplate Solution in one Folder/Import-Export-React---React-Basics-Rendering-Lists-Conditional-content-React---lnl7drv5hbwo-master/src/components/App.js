import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./Heading";
import InputQuery from "./InputQuery";
import SubHeading from "./SubHeading";
import SubmitButton from "./SubmitButton";


const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  )
}

export default App;
