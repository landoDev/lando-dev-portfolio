import React, { useState } from 'react';
import { SkillsDiv } from '../styles/index';
import { skills } from '../lists/SkillsList'

const SkillsMap = () => {
    return(
        <SkillsDiv>
            {skills.map(skill=>{
                return(
                    <i className={skill.iconClass}></i>
                )
            })}
        </SkillsDiv>
    )
}

export default SkillsMap;