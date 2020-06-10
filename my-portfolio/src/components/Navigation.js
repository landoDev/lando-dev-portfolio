import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ToggleOffTwoToneIcon from '@material-ui/icons/ToggleOffTwoTone';
import ToggleOnTwoToneIcon from '@material-ui/icons/ToggleOnTwoTone';
import { NavDiv, IconDiv } from '../styles/index'


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