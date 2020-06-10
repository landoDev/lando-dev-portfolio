import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleOffTwoToneIcon from '@material-ui/icons/ToggleOffTwoTone';
import ToggleOnTwoToneIcon from '@material-ui/icons/ToggleOnTwoTone';
import styled from 'styled-components'


const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    .link{
        margin: 1% 5%;
        text-decoration: none;
        // color: #FFFFFF;
        // text-shadow: 1px 1px #D3BC8D;
    }
`;

const IconDiv = styled.div` 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Navigation = props => {
    const [darkMode, setDarkMode] = useState(false)
    const toggle = e =>{
        setDarkMode(!darkMode)
    }
	return (
		<NavDiv className="navigation">
			<NavLink to="/" className='link'>Home</NavLink>
            
            {/* <IconDiv className='dark-mode' onClick={toggle}>
                {darkMode ?
                <ToggleOnTwoToneIcon fontSize='large'/>
                :
                <ToggleOffTwoToneIcon fontSize='large'/>
                }
            </IconDiv> */}
		</NavDiv>
	);
};

export default Navigation;