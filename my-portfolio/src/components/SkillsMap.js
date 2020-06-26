import React, { useState } from 'react';
import { primary, secondary, SkillsDiv, Skill, SkillTitle } from '../styles/index';
import { skills } from '../lists/SkillsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillsMap = () => {
    return(
        <SkillsDiv className="skill-map">
            {skills.map(skill=>{
                return(
                    <Skill>
                        <FontAwesomeIcon 
                        icon={skill.icon} 
                        size="5x"
                        color={secondary}
                         />
                        <SkillTitle>{skill.skill}</SkillTitle>
                        {/* I'd like to add a dropdown that a visitor can click to read the description */}
                        <p>{skill.description}</p>
                    </Skill>
                )
            })}
        </SkillsDiv>
    )
}

export default SkillsMap;