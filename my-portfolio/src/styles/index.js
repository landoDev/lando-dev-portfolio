import styled from 'styled-components';

// COLOR PALETTES
export const primary = "#283441";
export const secondary = "#51D0E1";
export const tertiary = "#FFFFFF";
export const accent = "#000000";

export const vaderPalette = {
    durasteelGrey: "#64696C",
    unityWhite: "FFFFFF",
    galaxyBlack: "000000",
    coruscantBlue: "394A59",
    imperialRed: "#BC1E22",
    valorGreen: "#556567"
}

// DEVICE BREAK POINTS
const device = {
    tablet: "(max-width: 800px)",
    mobile: "(max-width: 500px)",
    custom: "(max-width: 1335)", // handles the annoying responsiveness of skill section
    minTablet: "(min-width: 800px)",
    minMobile: "(min-width: 500px)"
}

//NAV STYLES

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

// HEADER STYLES
export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    background-color: ${primary};
    .avatar {
        @media ${device.tablet} {
            height: 30vh;
        }
        height: 40vh;
        margin-top: 5%;
        border-radius: 50%;
        border-bottom: 2px solid ${primary};
        box-shadow: 5px 5px ${secondary}

    }
    .icons{
        @media ${device.tablet}{
            width: 100%;
        }
        // border: 2px solid white;
        display: flex;
        justify-content: space-evenly;
        width: 25%;
        margin: 2% 0;
    }
    border-bottom: 5px solid ${secondary}   
`;

export const TitleDiv = styled.div`
    color: ${secondary};
    text-shadow: 1px 1px ${accent}
`;

export const PageTitle = styled.h1`
    @media ${device.tablet} {
        font-size: 3rem;
    }
    font-size: 5rem;
    margin-bottom: 0;
`;

export const PageSubTitle = styled.p`
    font-size: 1.5rem;
`;
///////


// BODY STYLES
export const TitleContainer = styled.div`
    @media ${device.tablet} {
        display: none
    }
    display: flex;
    justify-content: space-around;
    width: 100%;
    .title {
        font-size: 3rem;
        margin-left: 4%;
        color: ${primary};
        border-bottom: 2px solid ${secondary}
    }
    // .title.skills{
    //     margin-left: 10%;
    // }
    // .title.background {
    //     margin-left: 36%;
    // }
`;
export const BodyContainer = styled.div`
    @media ${device.tablet} {
        flex-direction: column;
    }
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5%;
    .skills {
        @media ${device.tablet} {
            width: 100%;
            margin: 0 5%;
        }
        width: 45%;
        flex-shrink: 0
        padding-left: 5%;
        // .responsive-title{

        // }
    }
    .about {
        width: 48%;
        border-left: 2px solid ${primary} 
    }

`;
// SKILL SECTION
export const SkillMapContainer = styled.div`
    @media ${device.minTablet} {
        .responsive-title {
            display: none;
        }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ResSkillTitle = styled.h2`
    text-align: center;
    color: ${primary};
    font-size: 2rem;
    border-bottom: 2px solid ${secondary};
    width: 10%;
`;
export const SkillsDiv = styled.div`
    @media ${device.tablet} {
        
    }
    display: flex;
    flex-flow: wrap;
`;
export const Skill = styled.div`
    @media ${device.tablet} {
        width: 25%;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    // border-bottom: 2px solid ${primary};
    width: 48%;
    margin: 1% 0;
    padding: 4%;
`;
export const SkillTitle = styled.h3`
    color: ${primary};
    font-size: 1.5rem;
`;
//////

// ABOUT SECTION
export const AboutContainer = styled.div`
    padding-left: 2%;
`;
export const AboutDiv = styled.div`
    padding: 2%;

`;
export const AboutText = styled.p`
    color: ${primary};
    font-size: 1.68rem;
`;
//////

// PROJECTS 
export const ProjectsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .live-projects {
        align-self: flex-start;
    }
`;

export const ProjectsTitle = styled.h2`
    font-size: 3rem;
    color: ${primary};
    border-bottom: 2px solid ${secondary};
    margin-bottom: 2.5%;
`;

export const MappedProjects = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    #project {
        width: 30%;
    }
`;

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;
    margin: 0 auto;
    .link {
        width: 100%;
        align-self: center;
        margin-top: 5%;
    }
`;

export const ThumbnailDiv = styled.div`
    width: calc(1440px * 0.25);
    height: calc(900px * 0.25);
    overflow: hidden;
    position: relative;
    pointer-events: none;
    border 1px solid black;
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
    .thumbnail:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;



export const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .contact-form {
        display: flex;
        flex-direction: column;
        justifu-content: left;
        align-items: flex-start;
        .element{
            margin: 5% 0;
        }
    }
`;