import React, { useContext } from 'react'
import { HomeContext } from '../contexts/HomeContext'
import styled from 'styled-components';

const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15%;
    bottom: 0;
    heigh
    position: fixed;
    width: 100%;
    h4, a{
        margin: 2% .2%;
        color: #FFFFFF;
        text-shadow: 1px 1px #101820;
        font-size: 2rem
    }
`;

const Footer = () =>{
    const github = useContext(HomeContext)
    return(
        <FooterDiv>
            <h4>Follow me on Github @</h4>
            <a href={github.html_url}>{github.login}</a>
        </FooterDiv>
    )
}

export default Footer