import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const ErrorWrapper = styled.section`
  min-height: 50vh;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 2rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;

function Error() {
  return (
    <ErrorWrapper>
      <h1>404</h1>
      <h3>go back, nothing here</h3>
      <Link to="/" className="btn">
        Dashboard
      </Link>
    </ErrorWrapper>
  );
}

export default Error;
