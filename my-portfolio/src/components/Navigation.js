import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const NavDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    background-color: #101820;
    .link{
        margin: 1% 5%;
        text-decoration: none;
        color: #FFFFFF;
        text-shadow: 1px 1px #D3BC8D;
    }
`;

const Navigation = () => {
	return (
		<NavDiv className="navigation">
			<NavLink to="/" className='link'>Home</NavLink>
			<NavLink to="/about" className='link'>About</NavLink>
			<NavLink to="/contact" className='link'>Contact</NavLink>
		</NavDiv>
	);
};

export default Navigation;