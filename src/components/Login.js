import axios from "axios";
import React, { useEffect, useState } from "react";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initialStae = {
    username: '',
    password: ''
  }

  const [credentials, setCredentials] = useState(initialStae)
  const [error, setError] = useState('')

  // const error = "";
  //replace with error state

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('/bubbles')
    })
    .catch(err => {
      setError('Username or Password not valid')
    })
  }

  const handleChange = e => {
    setError('')
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
            <input 
              type='text'
              name='username'
              data-testid="username"
              placeholder='Enter your username'
              value={credentials.username}
              onChange={handleChange}
            />
            <input 
              type='password'
              name='password'
              data-testid="password"
              placeholder='Enter your password'
              value={credentials.password}
              onChange={handleChange}
            />
            <button>Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.