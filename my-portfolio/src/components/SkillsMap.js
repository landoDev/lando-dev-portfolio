import React, { useState } from 'react';
import { SkillsDiv, Skill } from '../styles/index';
import { skills } from '../lists/SkillsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillsMap = () => {
    return(
        <SkillsDiv>
            {skills.map(skill=>{
                return(
                    <Skill>
                    <FontAwesomeIcon icon={skill.icon} />
                    <h3>{skill.skill}</h3>
                    <p>{skill.description}</p>
                    </Skill>
                )
            })}
        </SkillsDiv>
    )
}

export default SkillsMap;