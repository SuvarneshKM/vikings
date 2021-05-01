import React from 'react';
import logo from '../images/vikings.png';
import styled from "styled-components";
 
const Header = () => {
  return (
    <HeaderImg>
      <Image src={logo} alt='vikings' />
    </HeaderImg>
  )
}

const HeaderImg = styled.header`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 480px) and (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 479px) {
    height: 200px;
  }
`;

const Image = styled.img`
   width: 500px;
   @media (min-width: 480px) and (max-width: 768px) {
    width: 300px;
  }
   @media (max-width: 479px) {
    width: 200px;
  }
`;
export default Header