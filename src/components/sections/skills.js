import React from 'react';
import styled from 'styled-components';
import { media, mixins, Section, theme, Button } from '../../styles';
import Skill from "../Skill";

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
const SkillsTitle = styled.h2`
    line-height: 1.1;
    margin: 0;
    font-weight: 800;
    font-size: 40px;
    ${media.tablet`font-size: 38px;`};
    ${media.phablet`font-size: 35px;`};
    ${media.phone`font-size: 30px;`};
    ${media.tiny`font-size: 28px;`};
`
const SkillsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    grid-gap: 15px;
    width: 100%;
    margin: 40px 0;
    ${media.tablet`
        grid-template-columns: repeat(2, minmax(100px, 2fr));
    `},
    ${media.thone`
        grid-template-columns: repeat(2, minmax(100px, 1fr));
    `};
    ${media.phablet`
        grid-template-columns: repeat(2, minmax(60px, 1fr));
    `};
    ${media.phone`
        grid-template-columns: repeat(1, minmax(50px, 1fr));
    `};
`;
const Skills = ({ data }) => {
    return (
        <StyledContainer>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsWrapper>
                {data.skillSet.map((skills, i) => {
                    return <Skill key={i} skills={skills} />;
                })}
            </SkillsWrapper>
        </StyledContainer>
    )
}

export default Skills;