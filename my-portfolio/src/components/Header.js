import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';
import { HeaderDiv } from '../styles/index';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () =>{
    const github = useContext(HomeContext)
    return(
        <HeaderDiv>
            {/* HANDLE IMG SRC WITH GITHUB STATE */}
            {/* I'd like to have a cartoon logo made for the src */}
            <img src={github.avatar_url} alt="my headshot"></img>
            <div className='header-text'>
                <h1>Lando the Developer</h1>
                <p>{github.bio}</p>
            </div>
            <div className='icons'>
                <a href={github.html_url}>
                    <GitHubIcon color='secondary' fontSize='large' />
                </a>
                <a href='https://www.linkedin.com/in/landon-turner-42539852/'>
                    <LinkedInIcon fontSize='large' />
                </a>
            </div>
        </HeaderDiv>
    )
}

export default Header;