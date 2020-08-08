import React, { Component } from "react";
import styled from "styled-components";
import { media, mixins, theme, GlobalStyle } from "../styles";
import Nav from "../components/Nav";
import { Link } from 'react-scroll';
import { Hero, Contact, About, Skills, Projects } from "./sections";
import { HeroContent, AboutContent, ContactContent, ProjectsContent, SkillsContent } from "../contents";
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const { colors } = theme;

const AppContainer = styled.div`
  color: ${colors.mutedBlack};
  margin: auto;
  height: 100%;
  min-height: 100vh;
  ${media.tablet`
    margin:auto;
  `};
`;
const Title = styled.h4`
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 700;
  font-size: 26px;
  letter-spacing: 1px;
  ${media.tablet`
    text-align: center;
  `};
`;
const Pages = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
`;
const navigation = {
  brand: { name: "Logo", to: "hero" },
  links: [
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Blog", to: "https://logeshdev.hashnode.dev/", url:"https://logeshdev.hashnode.dev/"},
    { name: "Contact", to: "contact" },
  ],
};
const Footer = styled.div`
  margin: 40px auto;
`;
const UpIcon = styled(Link)`
  outline: 0;
  &:focus {
    outline: 0;
    color: ${colors.mutedBlack};
  }
`
const UpIconButton = styled(IconButton)`
  outline: 0;
  &:focus {
    outline: 0;
    color: ${colors.mutedBlack};
  }
`
const AuthorArea = styled.div`
  text-align: center;
  color: ${colors.mutedBlack};
  font-size: 14px;
  ${media.tablet`font-size: 12px;`};
  ${media.phablet`font-size: 10px;`};
  ${media.phone`font-size: 10px;`};
  p {
    margin-top: 10px;
  }
`

class App extends Component {
  render() {
    const { brand, links } = navigation;

    return (
      <AppContainer>
        <GlobalStyle />
        <Nav brand={brand} links={links} />
        <Pages>
          <div id="hero" >
            <Hero data={HeroContent} />
          </div>
          <div id="about">
            <About data={AboutContent} />
          </div>
          <div id="skills">
            <Skills data={SkillsContent} />
          </div>
          <div id="projects">
            <Projects data={ProjectsContent} />
          </div>
          <div id="contact">
            <Contact data={ContactContent} />
          </div>
        </Pages>
        <Footer>
          <AuthorArea>
            <UpIcon title="Let's Fly" to="hero"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                          <UpIconButton>
                            <KeyboardArrowUpIcon />
                          </UpIconButton>
            </UpIcon>
            <p>Designed &amp; Built By Logesh Kannan</p>
          </AuthorArea>
        </Footer>
      </AppContainer>
    );
  }
}

export default App;
