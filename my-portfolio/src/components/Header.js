import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';
import { HeaderDiv } from '../styles/index';



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
        </HeaderDiv>
    )
}

export default Header