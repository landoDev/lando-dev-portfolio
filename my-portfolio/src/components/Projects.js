import React, { useContext } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { HomeContext } from '../contexts/HomeContext';
import { ProjectsDiv, MappedProjects } from '../styles/index';
import { projects } from '../ProjectList';

const getPreview = link => {
    axios.get(`http://api.linkpreview.net/?key=1d9f3a79b51e7d1179eb873a1d74f538&q=${link}`)
    .then(res =>{
        console.log('link preview', res.image)
        return res.image
    }
    )
    .catch(err =>{
        console.log('getPreview', err)
    })
}

const Projects = props =>{
    const github = useContext(HomeContext)
    return(
        <ProjectsDiv>
            <h2>Projects</h2>
            <div className='live-projects'>
                <MappedProjects className='project-links'>
                    {projects.map(project=>{
                        // const thumbnail = getPreview(project.link)
                        return(
                            <Paper className='project' elevation={3}>
                                <div key={project.name}>
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                    {/* { thumbnail ? <img src={thumbnail} alt='link preview' />
                                    : <span>Preview Unavailable</span> } */}
                                    <div className='preview'>
                                        <iframe src={project.link} width = "500px" height = "500px" /> 
                                    </div>
                                    <a href={project.link}>{project.link}</a>
                                </div>
                            </Paper>
                        )
                    })}
                </MappedProjects>
            </div>
        </ProjectsDiv>
    )
}

export default Projects