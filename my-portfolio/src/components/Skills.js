import React from 'react'
import styled from 'styled-components';

const SkillsDiv = styled.div`

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