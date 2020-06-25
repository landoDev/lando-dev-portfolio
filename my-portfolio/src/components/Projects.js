import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { ProjectsDiv, MappedProjects, ThumbnailDiv, Project } from '../styles/index';
import { projects } from '../lists/ProjectList';

const getPreview = link => {
    return (
        <div className='thumbnail'>
            <iframe src={link} frameBorder='0'></iframe>
        </div>
    )
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
                                <Project id={project.name}>
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                    <ThumbnailDiv className='thumbnail-container'>
                                        {getPreview(project.link)}
                                    </ThumbnailDiv>
                                    {/* { thumbnail ? <img src={thumbnail} alt='link preview' />
                                    : <span>Preview Unavailable</span> } */}
                                    <Link href={project.link} className='link project'
                                    variant="body2"
                                    >{project.link}</Link>
                                </Project>
                            </Paper>
                        )
                    })}
                </MappedProjects>
            </div>
        </ProjectsDiv>
    )
}

export default Projects