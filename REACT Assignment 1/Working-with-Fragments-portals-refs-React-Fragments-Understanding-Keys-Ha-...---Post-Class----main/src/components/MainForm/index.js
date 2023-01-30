import React from "react";
const MainForm = (props) => {
  return (
    <div className="formContainer">
      <h1>Main Form</h1>
      <form action="" onSubmit={props.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" data-testid='name' autoComplete="off" onChange={props.handleName}/>

        <label htmlFor="email">Email address</label>
        <input type="email" data-testid = 'email' autoComplete="off" onChange={props.handleEmail}/>
        
        <label htmlFor="gender">Gender</label>
        <select name="" data-testid = 'gender' onChange={props.handleGender} value={props.defGender}>
            <option >Male</option>
            <option >Female</option>
            <option >Other</option>
        </select>
        
        <label htmlFor="phone">Phone Number</label>
        <input type="number" data-testid = 'phoneNumber' autoComplete="off" onChange={props.handlePhone}/>
        
        <label htmlFor="password">Password</label>
        <input type="password" data-testid = 'password' autoComplete="off" onChange={props.handlePassword}/>
        
        <button type="submit" data-testid = 'submit'>Submit</button>
        <p>{props.showError}</p>
        
      </form>
    </div>
  );
};

export default MainForm;