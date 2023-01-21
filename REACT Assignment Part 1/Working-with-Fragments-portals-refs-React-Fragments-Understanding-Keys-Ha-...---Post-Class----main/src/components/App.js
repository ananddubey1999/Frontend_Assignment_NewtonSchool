import React, { Component, useState } from "react";
import MainForm from "./MainForm/";
//import "./styles/App.css";

const App = () => {
  const [uName, setUname] = useState("");
  const [eMail,setEmail] = useState("");
  const [gender,setGender] = useState("Male");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const [errorMsg,setErrormsg] = useState("");

  const handleName = (event) => {
    setUname(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) =>{
    console.log("submit button clicked");
    // console.log(uName);
    // console.log(eMail);
    // console.log(gender);
    // console.log(phone);
    // console.log(password);
    if(!uName || !eMail || !phone || !password ){
      setErrormsg("All fields are mandatory");
      e.preventDefault();
      return;
    }
    else if(!uName.match(/^[0-9a-z]+$/)){
      setErrormsg("Name is not alphanumeric");
      e.preventDefault();
      return;
    }
    else if(!eMail.match(/\S+@\S+\.\S+/)){
      setErrormsg("Email must contain @");
      e.preventDefault();
      return;
    }
    else{
      var name = eMail.substring(0, eMail.lastIndexOf("@"));
      setErrormsg("Hello "+name);
      e.preventDefault();
    }
    console.log("submitted")
  }
  return (
    <div id="main">
      <MainForm
        handleName={handleName}
        handleEmail={handleEmail}
        handleGender={handleGender}
        defGender={gender}
        handlePhone={handlePhone}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        showError={errorMsg}
      />
    </div>
  );
};

export default App;