import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\d+$/;
    let error = null;
    let welcome = null;

    if (!name) {
      error = 'All fields are mandatory';
    } else if (!nameRegex.test(name)) {
      error = 'Name is not alphanumeric';
    } else if (!email) {
      error = 'All fields are mandatory';
    } else if (!emailRegex.test(email)) {
      error = 'Email must contain @';
    } else if (gender !== 'male' && gender !== 'female' && gender !== 'other') {
      error = 'Please identify as male, female or others';
    } else if (!phoneNumber) {
      error = 'All fields are mandatory';
    } else if (!phoneRegex.test(phoneNumber)) {
      error = 'Phone Number must contain only numbers';
    } else if (password.length < 6) {
      error = 'Password must contain at least 6 letters';
    } else {
      const username = email.substring(0, email.indexOf('@'));
      welcome = `Hello ${username}`;
    }

    setErrorMessage(error);
    setWelcomeMessage(welcome);
  };

  return (
    <div>
      {errorMessage && <p data-testid="error-message">{errorMessage}</p>}
      {welcomeMessage && <p data-testid="welcome-message">{welcomeMessage}</p>}
      <form data-testid="form" onSubmit={handleSubmit}>
        <input
          data-testid="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          data-testid="email"
          type="text"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select
          data-testid="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          data-testid="phoneNumber"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          data-testid="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input data-testid="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
