import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HomeContext } from '../contexts/HomeContext';
import Navigation from './Navigation';
import { primary, secondary, HeaderDiv, PageTitle, PageSubTitle, TitleDiv } from '../styles/index';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DescriptionIcon from '@material-ui/icons/Description';
import LanguageIcon from '@material-ui/icons/Language';


const Header = () =>{
    const github = useContext(HomeContext)
    return(
        <HeaderDiv>
            <Navigation />
            {/* HANDLE IMG SRC WITH GITHUB STATE */}
            {/* I'd like to have a cartoon logo made for the src */}
            <img className='avatar' src={github.avatar_url} alt="my headshot"></img>
            <TitleDiv className='header-text'>
                <PageTitle>Lando the Developer</PageTitle>
                <PageSubTitle>{github.bio}</PageSubTitle>
            </TitleDiv>
            <div className='icons'>
                <a href={github.html_url}>
                    <GitHubIcon  style={{ color: secondary}} fontSize='large' />
                </a>
                <a href='https://www.linkedin.com/in/landon-turner-42539852/'>
                    <LinkedInIcon style={{color: secondary}} fontSize='large' />
                </a>
                <a href='https://docs.google.com/document/d/1XjFDXGjj-LrVeJPeuPqjOz7bYk3j3UmlgJVqcleOvCQ/edit?usp=sharing'>
                    <DescriptionIcon style={{color: secondary}} fontSize='large' />
                </a>
                <a href='https://en.wikipedia.org/wiki/Landon_Turner'>
                    <LanguageIcon style={{color: secondary}} fontSize='large' />
                </a>
                <Link to='/contact'>
                    <ContactMailIcon style={{color: secondary}} fontSize='large' />
                </Link>
            </div>
        </HeaderDiv>
    )
}

export default Header;