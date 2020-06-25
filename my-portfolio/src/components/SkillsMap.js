import React, { useState } from 'react';
import { SkillsDiv } from '../styles/index';
import { skills } from '../lists/SkillsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillsMap = () => {
    return(
        <SkillsDiv>
            {skills.map(skill=>{
                return(
                    <>
                    <FontAwesomeIcon icon={skill.icon} />
                    <h3>{skill.skill}</h3>
                    <p>{skill.description}</p>
                    </>
                )
            })}
        </SkillsDiv>
    )
}

export default SkillsMap;