import React, { useState } from "react";

import { signUpFormValidation } from "./../utils/validation";
const initialState = {
  name: "",
  email: "",
  password: "",
  consent: "off"
};
const App = () => {
  const [user, setUser] = useState(initialState);
  const [result, setResult] = useState({});
  const consentHandler = (e) => {
    setUser({ ...user, [e.target.id]: e.target.checked });
  };
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setResult(signUpFormValidation(user));
    console.log(result);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" onChange={(e) => changeHandler(e)} />
          {result && <p style={{ color: "red" }}>{result.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" onChange={(e) => changeHandler(e)} />
          {result && <p style={{ color: "red" }}>{result.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password :</label>
          <input type="text" id="password" onChange={(e) => changeHandler(e)} />
          {result && <p style={{ color: "red" }}>{result.password}</p>}
        </div>
        <div>
          <label htmlFor="consent">Consent :</label>
          <input
            type="checkbox"
            id="consent"
            onChange={(e) => consentHandler(e)}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default App;
