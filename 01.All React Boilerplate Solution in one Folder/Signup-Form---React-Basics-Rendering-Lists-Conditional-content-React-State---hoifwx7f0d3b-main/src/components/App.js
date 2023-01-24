import React, {Component, useState} from "react";
import '../styles/App.css';


const App = () => {

    const validate = (event) => {
      
    event.preventDefault();
    var email = document.querySelector("input[data-testid='email']").value;
    const error = document.getElementById("error");
    const welcome = document.getElementById("welcome");
    var input = document.querySelectorAll("input");
    var name = input[0].value;
    var password = input[3].value;
    

      for(var i=0 ; i<input.length ; i++){

        console.log(input[i].value.length);

        if(input[i].value.length == 0){

            error.innerHTML = "<h1>All fields are mandatory</h1>";
                return;
        }

      }

      var matches = name.match(/(\d+)/);
      console.log(matches);

      if(matches == null){

        error.innerHTML = "<h1>Name is not alphanumeric</h1>";
        return;
      }

      if( email.indexOf('@') == -1)
      {
        welcome.innerHTML = "";
        error.innerHTML = "<h1>Email must contain @</h1>";

        return
      }

      if(password.length <6){
        error.innerHTML = "<h1>Password must contain atleast 6 letters</h1>";
        return;
      }
      
      console.log("email="+email);

      error.innerHTML ="";

      welcome.innerHTML = "<h1>Hello "+email.slice(0,email.indexOf('@'))+"</h1>";

    }

  

  return (

    <div id="main">

      <form  onSubmit={validate}>

        <label>name</label>
        <input type="text" data-testid = 'name'  />
        <label>Email</label>
        <input type="text" data-testid='email' id = "email"  /> 
        <label>Gender</label>

        <select data-testid='gender' placeholder="Gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Others</option>
        </select>

          <label>Phone Number</label>
          <input type="text" data-testid='phoneNumber'   />
          <label>Password</label>
          <input type="password" data-testid = "password"  />
          <button type="submit" data-testid="submit">Submit</button>

        </form>

        <div id="error"></div>
        <div id="welcome"></div>
    </div>

  )
}


export default App;
