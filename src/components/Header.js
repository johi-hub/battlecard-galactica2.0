import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    height: 60px;
    background: #000;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled(Link)`
color: #fff;
padding-left: 1rem;
text-decoration: none;
font-size: 1.5rem;
font-weight: bold;
font-style: italic;
`;

const NavItems = styled.div `
display: flex;
`;

const NavbarLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 1rem;
`;


const header = () => {
    return (
    <Navbar>
        <Logo to="/">Welcome</Logo>
        <NavItems>
            <NavbarLink to="/home">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/discussion">Discussion</NavbarLink>
        </NavItems>
    </Navbar>
    );
};

export default header
