import React from 'react';
import styled from 'styled-components';
import { media, mixins, Section, theme, Button } from '../../styles';
import Project from "../Project";

const { fontSizes, colors } = theme;

const StyledContainer = styled(Section)`
    ${mixins.flexCenter};
    flex-direction: column;
    min-height: 100vh;
    ${media.tablet`padding-top: 150px;`};
    div {
        width: 100%;
    }
`
const ProjectsTitle = styled.h2`
    line-height: 1.1;
    margin: 0;
    font-weight: 800;
    font-size: 40px;
    ${media.tablet`font-size: 38px;`};
    ${media.phablet`font-size: 35px;`};
    ${media.phone`font-size: 30px;`};
    ${media.tiny`font-size: 28px;`};
`
const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    grid-gap: 15px;
    width: 100%;
    margin: 40px 0;
    ${media.tablet`
        grid-template-columns: repeat(2, minmax(100px, 1fr));
    `},
    ${media.thone`
        grid-template-columns: repeat(1, minmax(200px, 1fr));
    `};
    ${media.phablet`
        grid-template-columns: repeat(1, minmax(70px, 1fr));
    `};
`;
const Projects = ({ data }) => {
    return (
        <StyledContainer>
            <ProjectsTitle>Projects</ProjectsTitle>
            <ProjectsWrapper>
                {data.projectsList.map((project, i) => {
                    return <Project key={i} project={project} />;
                })}
            </ProjectsWrapper>
        </StyledContainer>
    )
}

export default Projects;