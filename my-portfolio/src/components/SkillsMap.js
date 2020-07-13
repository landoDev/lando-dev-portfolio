import React, { useState } from 'react';
import { primary, secondary, SkillsDiv, Skill, SkillTitle, ResSkillTitle } from '../styles/index';
import { skills } from '../lists/SkillsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';

const SkillsMap = () => {
    return(
        <>
        <ResSkillTitle className='responsive-title'>Skills</ResSkillTitle>
        <SkillsDiv className="skill-map">
            {skills.map(skill=>{
                return(
                    <Skill key={skill.icon[1]}>
                        <FontAwesomeIcon 
                        icon={skill.icon} 
                        size="5x"
                        color={secondary}
                         />
                        <SkillTitle>{skill.skill}</SkillTitle>
                        {/* I'd like to add a dropdown that a visitor can click to read the description */}
                        {/* certification should take you to the certifications component when I have more than one official one per skill */}
                        {skill.certification ?
                            <Button color={secondary} href={skill.certification}>
                                Certification
                            </Button>
                            : 
                            null
                        }
                        <p>{skill.description}</p> {/*see more instead, link to skills?*/}
                    </Skill>
                )
            })}
        </SkillsDiv>
        </>
    )
}

export default SkillsMap;