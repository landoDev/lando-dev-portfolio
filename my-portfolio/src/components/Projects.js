import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { HomeContext } from '../contexts/HomeContext';
import axios from 'axios';

const ProjectsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2% 2%;
    background-color: #101820;
    border: 5px outset #D3BC8D;
    h2, h3{
        color: #FFFFFF;
        text-shadow: 1px 1px #D3BC8D;
        text-align: center;
        font-size: 2rem;
    }
    .live-projects{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        .project-links{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin: 3% 0;
            a{
                color: #FFFFFF;
                text-shadow: 1px 1px #D3BC8D;
                text-align: center;
                width: 100%;

            }
        }
    }
    .github-repos{
        display: flex;
        justify-content: space-around;
        flex-flow: wrap;
        align-items: center;
        width: 100%;
        .repo-div{
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #FFFFFF;
            text-shadow: 1px 1px #D3BC8D;
            text-align: center;
            margin: 4% 0;
            width: 30%;
            border: 2px outset #D3BC8D;
            background-color: #FFFFFF;
            .repo-name{
                color: #101820;
                text-shadow: 1px 1px #D3BC8D;
                text-align: center;
            } 
            .repo-link{
                color: #101820;
                margin-bottom: 5%;
            }
        }
        }
    }
`;

const Projects = props =>{
    // const [repoData, setRepoData] = useState([])
    const github = useContext(HomeContext)
    // const repos = `${github.repos_url}`
    
    // Calls github repos on load
    // needs github in dependecy array
    // useEffect(()=>{
    //     axios.get(`${repos}`)
    //     .then(res=>{
    //         setRepoData(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[github])
    
    return(
        // I KNOW THIS IS A MESS LOL THE GOAL IS TO HAVE TWO SECTIONS AND MAP THROUGH EXISTING PROJECTS OFF AN API CALL. MAY WANT TO GET RID OF NETLIFY IF YOU PUBLISH MORE TO ZEIT AND ADD NASA AS A BONUS LINK OR SOMETHING
        <ProjectsDiv>
            <h2>Live Projects</h2>
            <div className='live-projects'>
                {/* EVENTUALLY WILL MAP THROUGH USING STATE FROM API CALL */}
                {/* <div className='projects zeit'> */}
                    {/* <h3>Zeit</h3> */}
                    <div className='project-links'>
                        <a href='https://weeb-watch-lj5w55t3e.now.sh/'>Weeb Watch: Top Ranked Anime Suggestions</a>
                        <a href='https://landos-git-legion-nlyv30g98.now.sh/'>Lando's Github Legion</a>
                        <a href='https://lando-nasa-page.netlify.com/'>NASA Photo of the Day</a>
                    </div>
                {/* </div> */}
                {/* EVENTUALLY WILL MAP THROUGH USING STATE FROM API CALL */}
                {/* <div className='projects netlify'> */}
                    {/* <h3>Netlify</h3> */}
                    {/* <div className='project-links'> */}
                        {/* <a href='https://lando-nasa-page.netlify.com/'>NASA Photo of the Day</a> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
            <h3>Public Repos</h3>
            <div className='github-repos'>
                {props.repoData.map(repo=>{
                    return(
                        <div key={repo.id} className='repo-div'>
                            <h4 className='repo-name'>{repo.name}</h4>
                            <a href={repo.html_url} className='repo-link'>Link</a>
                        </div>
                    )
                })}
            </div>
        </ProjectsDiv>
    )
}

export default Projects