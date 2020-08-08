import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { media, mixins, Section, theme, Button } from '../../styles';

const { fontSizes, colors } = theme;

const StyledContainer = styled(Section)`
    ${mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    ${media.tablet`padding-top: 150px;`};
    div {
        width: 100%;
    }
`
const Highlight = styled.span`
    display: inline-block;
    padding: 0px 7px;
    transition: all .2s ease-in-out;
    box-sizing: border-box;
    text-decoration: none;
    box-shadow: inset 0 -1px 0 #040C09;
    &:hover {
      box-shadow: inset 0 -60px 0 0 #040C09;
      color: white;
    }
`
const StyledWelcome = styled.p`
    margin: 0 0 20px 3px;
    font-weight: normal;
    font-size: ${fontSizes.nm};
    ${media.tablet`font-size: 18px;`};
    ${media.phablet`font-size: 16px;`};
    ${media.phone`font-size: 14px;`};
` 
const StyledName = styled.h2`
    font-size: 70px;
    line-height: 1.1;
    margin: 0;
    font-weight: 800;
    ${media.desktop`font-size: 60px;`};
    ${media.tablet`font-size: 50px;`};
    ${media.phablet`font-size: 40px;`};
    ${media.phone`font-size: 35px;`};
`
const StyledDetails = styled.div`
    width: 60%;
    max-width: 600px;
    padding-top: 1.5rem;
`
const StyledDetailContent = styled.p`
    line-height: 1.5;
    font-size: ${fontSizes.nm};
    font-weight: normal;
    ${media.tablet`
        font-size: 18px;
        line-height: 1.5;
    `};
    ${media.phablet`
        font-size: 16px;
        line-height: 1.6;
    `};
    ${media.phone`
        font-size: 14px;
        line-height: 1.7;
    `};
    margin: 0 0 20px 3px;
`
const GetToKnowMoreBtn = styled(Button)`

`

const Hero = ({data}) => {

    return (
            <StyledContainer>
                <StyledWelcome>{data.welcomeNote}</StyledWelcome>
                <StyledName>{data.name}</StyledName>
                <StyledDetails>
                    <StyledDetailContent>
                        <Highlight>{data.designation}</Highlight>{data.details}
                    </StyledDetailContent>
                </StyledDetails>
                <Link
                    to="about"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={20}
                    duration={500}
                    >
                    <GetToKnowMoreBtn>Get To Know More!</GetToKnowMoreBtn>
                </Link>
            </StyledContainer>
        );
}

export default Hero;