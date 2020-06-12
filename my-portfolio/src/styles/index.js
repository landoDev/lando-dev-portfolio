import styled from 'styled-components';

export const NavDiv = styled.div`
    display: flex;
    justify-content: space-between;
    .link{
        margin: 1% 5%;
        text-decoration: none;
        // color: #FFFFFF;
        // text-shadow: 1px 1px #D3BC8D;
    }
`;

// Icon in Navigation
const IconDiv = styled.div` 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    .icons{
        // border: 2px solid black;
        display: flex;
        justify-content: space-evenly;
        width: 25%;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    .title {
        margin-left: 4%;
    }
    .title.background {
        margin-left: 45%;
    }
`;
export const BodyContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .sub-body {
        width: 45%;
    }
`;

export const SkillsDiv = styled.div`

`;

export const ProjectsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MappedProjects = styled.div`
    display: flex;
    justify-content: space-evenly;
    .project {
        width: 30%;
    }
`;

export const ThumbnailDiv = styled.div`
    width: calc(1440px * 0.25);
    height: calc(900px * 0.25);
    display: inline-block;
    overflow: hidden;
    position: relative;
    .thumbnail iframe {
        width: 1440px;
        height: 900px;
    };
    .thumbnail{
        position: relative;
        -ms-zoom: 0.25;
        -moz-transform: scale(0.25);
        -moz-transform-origin: 0 0;
        -o-transform: scale(0.25);
        -o-transform-origin: 0 0;
        -webkit-transform: scale(0.25);
        -webkit-transform-origin: 0 0;
    };
    .thumbnail:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

export const AboutDiv = styled.div`

`;

export const ContactDiv = styled.div`

`;