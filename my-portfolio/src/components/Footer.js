import React, { useContext } from 'react'
import { HomeContext } from '../contexts/HomeContext'
import styled from 'styled-components';

const FooterDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #101820;
    h4, a{
        margin: 2% .2%;
        color: #FFFFFF;
        text-shadow: 1px 1px #D3BC8D;
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