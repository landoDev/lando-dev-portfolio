import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { HomeContext } from '../contexts/HomeContext';
import { ProjectsDiv } from '../styles/index';
import { projects } from '../ProjectList';



const Projects = props =>{
    // Repo data has been prop drilled into this component
    const github = useContext(HomeContext)
    return(
        <ProjectsDiv>
            <h2>Projects</h2>
            <div className='live-projects'>
                <div className='project-links'>
                    {projects.map(project=>{
                        return(
                            <div key={project.name}>
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <a href={project.link}>{project.link}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </ProjectsDiv>
    )
}

export default Projects