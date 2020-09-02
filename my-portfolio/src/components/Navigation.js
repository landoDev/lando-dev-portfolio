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
			<a href="#skills-title" className='link'>Skills</a>
            <a href="#background-title" className='link'>Background</a>
            <a href="#my-projects" className='link'>Projects</a>
            
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