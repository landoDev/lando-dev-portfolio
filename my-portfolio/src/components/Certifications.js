const Certifications = () => {
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
                        {/* And see certifications */}
                        <p>{skill.description}</p>
                    </Skill>
                )
            })}
        </SkillsDiv>
        </>
    )
}

export default Certifications;