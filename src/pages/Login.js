import React from 'react'
import styled from 'styled-components';
import loginImage from '../images/login-img.svg';

const LoginWrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;

function Login() {
  return (
    <LoginWrapper>
      <img src={loginImage} alt="github user" />
      <h1>github user</h1>
      <button className="btn">Login</button>
    </LoginWrapper>
  )
}

export default Login;