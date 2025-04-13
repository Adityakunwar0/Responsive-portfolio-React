import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
        <NavLink to= "/">
         <img src='./images/logo.JPG' alt='logo' className="logo" />
        </NavLink>
        <Navbar />
    </MainHeader>
  )
}
const MainHeader = styled.header ` 
     padding: 0 2rem;
     height: 8rem;
     background-color: ${({ theme }) => theme.colors.bg};
     display: flex;
     justify-content: space-between;
     align-items: center;

    .logo {
    height: auto;
    max-width: 15%;
    border-radius : 20%;    
  }

`;

export default Header