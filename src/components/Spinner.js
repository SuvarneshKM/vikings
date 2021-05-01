import React from 'react';
import styled from 'styled-components';
import spinner from '../images/spinner1.gif';

const Spinner = () => {
  return (
    <SpinnerImg src={spinner} alt='Loading' />
  )
}

const SpinnerImg = styled.img`
  width: 200px;
  margin: auto;
  display: block;
  @media (min-width: 480px) and (max-width: 768px) {
    width: 100px;
  }
  @media (max-width: 479px) {
    width: 50px;
  }
`;

export default Spinner
