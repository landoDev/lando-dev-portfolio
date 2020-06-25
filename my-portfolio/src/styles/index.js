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
        margin-top: 5%;
        border-radius: 50%;
        border-bottom: 2px solid ${primary};
        box-shadow: 5px 5px ${secondary}
    }
    .icons{
        // border: 2px solid white;
        display: flex;
        justify-content: space-evenly;
        width: 25%;
        margin: 2% 0;
    }
    border-bottom: 2px solid ${tertiary}   
`;

export const TitleDiv = styled.div`
    color: ${secondary};
    text-shadow: 1px 1px ${accent}
`;

export const PageTitle = styled.h1`
    font-size: 5rem;
    margin-bottom: 0;
`;

export const PageSubTitle = styled.p`
    font-size: 1.5rem;
`;
///////


// BODY STYLES
export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    .title {
        margin-left: 4%;
        color: ${primary};
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
    display: flex;
`;
export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    width:100%;
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

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;
    margin: 0 auto;
    .link {
        width: 100%;
        align-self: flex-end;
        margin-top: 5%;
    }
`;

export const ThumbnailDiv = styled.div`
    width: calc(1440px * 0.25);
    height: calc(900px * 0.25);
    overflow: hidden;
    position: relative;
    pointer-events: none;
    margin: 0 auto;
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

export const AboutDiv = styled.div`

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