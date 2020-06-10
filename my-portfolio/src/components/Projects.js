import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { HomeContext } from '../contexts/HomeContext';
import axios from 'axios';

const ProjectsDiv = styled.div`

`;

const Projects = props =>{
    // Repo data has been prop drilled into this component
    const github = useContext(HomeContext)
    return(
        // I KNOW THIS IS A MESS LOL THE GOAL IS TO HAVE TWO SECTIONS AND MAP THROUGH EXISTING PROJECTS OFF AN API CALL. MAY WANT TO GET RID OF NETLIFY IF YOU PUBLISH MORE TO ZEIT AND ADD NASA AS A BONUS LINK OR SOMETHING
        <ProjectsDiv>
            <h2>Projects</h2>
            <div className='live-projects'>
                {/* MAP THROUGH WHITELIST PROJECTS INSTEAD OF THESE HARD CODED LINKS */}
                <div className='project-links'>
                    <a href='https://weeb-watch-lj5w55t3e.now.sh/'>Weeb Watch: Top Ranked Anime Suggestions</a>
                    <a href='https://landos-git-legion-nlyv30g98.now.sh/'>Lando's Github Legion</a>
                    <a href='https://lando-nasa-page.netlify.com/'>NASA Photo of the Day</a>
                </div>
            </div>
        </ProjectsDiv>
    )
}

export default Projects