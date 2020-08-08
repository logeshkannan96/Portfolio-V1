import React from 'react';
import styled from 'styled-components';
import { media, mixins, Section, theme, Button } from '../../styles';

const { fontSizes, colors } = theme;

const StyledContainer = styled(Section)`
    ${mixins.flexCenter};
    flex-direction: column;
    // align-items: flex-start;
    min-height: 100vh;
    ${media.tablet`padding-top: 150px;`};
    div {
        width: 100%;
    }
`
const UnderlinedSpan = styled.span`
    font-weight: 500;
    text-decoration: underline;
`
const ContentsContainer = styled.div`
    padding: 20px 140px;
    ${media.desktop` padding: 20px 80px;`};    
    ${media.tablet` padding: 20px 60px;`};
    ${media.phablet` padding: 20px 0px;`};
    ${media.phone` padding: 20px 0px;`};
    ${media.tiny` padding: 20px 0px;`};
`
const Description1 = styled.p`
    margin: 20px 0;
    ${media.phone`font-size : 14px;`};
    ${media.tiny`font-size : 14px;`};
`
const AboutTitle = styled.h2`
    line-height: 1.1;
    margin: 0;
    font-weight: 800;
    font-size: 40px;
    ${media.tablet`font-size: 38px;`};
    ${media.phablet`font-size: 35px;`};
    ${media.phone`font-size: 30px;`};
    ${media.tiny`font-size: 28px;`};
`
const BtnLink = styled.a`
    text-align: center;
    display: none;
    ${media.tablet`display:block;`},
    ${media.thone`display:block;`};
    ${media.phablet`display:block;`};
`
const ResumeButton = styled(Button)`
   
`

const About = ({data}) => {
    return (
        <StyledContainer>
            <AboutTitle>About</AboutTitle>
            <ContentsContainer>
                <Description1>
                    Hello! I'm Logesh, a software developer based in Bangalore, India.
                </Description1>
                <Description1>
                    I always prefer to keep learning, continue challenging myself, and do interesting things that matter. My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and my endeavors. I’m a fast learner, able to pick up new skills and able to handle multiple projects with ease.
                </Description1>
                <Description1>
                    I have done my graduation from Nandha College of Technology. I joined <UnderlinedSpan>Jspiders Training Institute</UnderlinedSpan>, where I am trained as Java Developer. Now, I am working as a Full Stack Developer in <UnderlinedSpan>Vetologic Technologies Private Limited</UnderlinedSpan>, Bangalore, where I work on various projects.
                </Description1>
            </ContentsContainer>
            <BtnLink href={process.env.PUBLIC_URL+"/logesh-resume.pdf"} target="_blank" rel="nofollow noopener noreferrer">
                <ResumeButton>View My Resume</ResumeButton>
            </BtnLink>
        </StyledContainer>
    )
}

export default About;