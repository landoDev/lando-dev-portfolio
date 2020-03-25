import React from 'react'
import styled from 'styled-components';

const SkillsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2% 2%;
    background-color: #101820;
    border: 5px outset #D3BC8D;
    .skills-title{
        color: #FFFFFF;
        text-shadow: 1px 1px #D3BC8D;
        font-size: 2rem;
    }
    .my-skills{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        h3{
            text-align: center;
            color: #FFFFFF;
            text-shadow: 1px 1px #D3BC8D;
            font-size: 1.5rem;
    }
`;


const Skills = () =>{
    
    return(
        <SkillsDiv>
            <div className='skills-title'>
                <h2>Skills</h2>
            </div>
            <div className='my-skills'>
                <h3>HTML/CSS</h3>
                <h3>JavaScript</h3>
                <h3>React</h3>
            </div>
        </SkillsDiv>
    )
}

export default Skills