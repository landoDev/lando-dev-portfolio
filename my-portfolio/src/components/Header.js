import React, { useContext } from 'react'
import { HomeContext } from '../contexts/HomeContext'
import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 2% 2%;
    background-color: #101820;
    border: 5px outset #D3BC8D;
    img{
        border-radius: 50%;
        padding: 2%;
    }
    .header-text{
        text-align: center;
        color: #FFFFFF;
        text-shadow: 1px 1px #D3BC8D;
        h1{
            font-size: 4rem;
            margin: 0 1%;
            width: 100%;
        }
        p{
            font-size: 1.5rem
            margin: 0 5%;
        }
    }
`;

const Header = () =>{
    const github = useContext(HomeContext)
    return(
        <HeaderDiv>
            {/* HANDLE IMG SRC WITH GITHUB STATE */}
            <img src={github.avatar_url} alt="my headshot"></img>
            <div className='header-text'>
                <h1>Lando the Developer</h1>
                <p>{github.bio}</p>
            </div>
        </HeaderDiv>
    )
}

export default Header