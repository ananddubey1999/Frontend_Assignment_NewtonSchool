import React from "react";
import "../styles/App.css";
import useInput from "./useInput";
import SignInForm from "./SignInForm";
const App = () => {
  //complete the useInput hook
  const email = useInput("");
  const password = useInput("");


  return (
    <div id="main">
      <SignInForm email={email} password={password} />
      <h1>Result</h1>
      <h2 id="email">Email is: {email.value}</h2>
      <h2 id="password" >Password is: {password.value}</h2>
    </div>
  );
};

export default App;