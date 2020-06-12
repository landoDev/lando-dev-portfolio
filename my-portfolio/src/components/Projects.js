import React, { useContext } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import Paper from '@material-ui/core/Paper';
import { HomeContext } from '../contexts/HomeContext';
import { ProjectsDiv, MappedProjects } from '../styles/index';
import { projects } from '../ProjectList';

const getPreview = link => {
    // I'm going to leave this as a possible way to get a preview 
    axios.get(`http://api.linkpreview.net/?key=1d9f3a79b51e7d1179eb873a1d74f538&q=${link}`)
    .then(res =>{
        {/* https://medium.com/@jamesfuthey/simulating-the-creation-of-website-thumbnail-screenshots-using-iframes-7145269891db */}
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
                                <div id={project.name}>
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                    {/* https://medium.com/@jamesfuthey/simulating-the-creation-of-website-thumbnail-screenshots-using-iframes-7145269891db */}
                                    {/* { thumbnail ? <img src={thumbnail} alt='link preview' />
                                    : <span>Preview Unavailable</span> } */}
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