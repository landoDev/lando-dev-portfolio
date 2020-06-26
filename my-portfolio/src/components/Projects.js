import React, { useContext } from 'react';
import { HomeContext } from '../contexts/HomeContext';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { primary, secondary, ProjectsDiv, MappedProjects, ThumbnailDiv, Project, ProjectsTitle } from '../styles/index';
import { projects } from '../lists/ProjectList';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    //   backgroundColor: primary
    },
    media: {
      height: 140,
    },
  });

const getPreview = link => {
    return (
        <div className='thumbnail'>
            <iframe src={link} frameBorder='0'></iframe>
        </div>
    )
}

const Projects = props =>{
    const github = useContext(HomeContext)
    const classes = useStyles();
    return(
        <ProjectsDiv>
            <ProjectsTitle>Projects</ProjectsTitle>
            
                <MappedProjects className='project-links'>
                    {projects.map(project=>{
                        // const thumbnail = getPreview(project.link)
                        return(
                            <Card id="project" className={classes.root}>
                                <CardActionArea id={project.name}>
                                    <CardMedia onClick={()=>{
                                        window.open(project.link)
                                    }}>
                                        <ThumbnailDiv className='thumbnail-container'>
                                            {getPreview(project.link)}
                                        </ThumbnailDiv>
                                        {/* { thumbnail ? <img src={thumbnail} alt='link preview' />
                                        : <span>Preview Unavailable</span> } */}
                                    </CardMedia>
                                    <CardContent>
                                        <h2 className="project-name">{project.name}</h2>
                                        <p className="project-description">{project.description}</p>
                                    </CardContent>
                                    <CardActions>
                                        <Link href={project.link} className='link project'
                                        target="_blank"
                                        >
                                            <Button color="primary">
                                            Go 
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        )
                    })}
                </MappedProjects>
        </ProjectsDiv>
    )
}

export default Projects