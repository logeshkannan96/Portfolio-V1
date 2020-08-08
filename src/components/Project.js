import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { theme, media, mixins } from "../styles";
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const { transition,colors,fonts,easing } = theme;

const Card = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: 0.25rem;
  box-shadow: 8px 8px 42px rgba(235, 235, 235),
    -8px -8px 42px rgba(255, 255, 255, 0.1);
`;
const CardBody = styled.div`
  padding: 1.5rem 1.5rem;
`;
const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 20px;
  text-transform: capitalize;
`;
const Links = styled.p`
  span {
    margin: 0 5px;
  }
`
const StyledLink = styled.a`
  transition: 0.2s;
  &:hover {
    color: #808080;
  }
`
const Details = styled.p`
  margin-top: 20px;
  font-size: 14px;
  letter-spacing: 0.5px;
`;
const Tech = styled.p`
  margin: 0px 1.5rem 20px;
  color: #646464;
  font-size: 12px;
  font-weight: 500;
  font-family: ${fonts.secondary};
  letter-spacing: 0.5px;
  text-transform: capitalize;
`;

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: props.project,
    };
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <p>{this.state.project.title}</p>
            <Links>
              {this.state.project.github && <span><StyledLink target="_blank" href={this.state.project.github}><GitHubIcon /></StyledLink></span>}
              {this.state.project.external && <span><StyledLink target="_blank" href={this.state.project.external}><OpenInNewIcon/></StyledLink></span>}
            </Links> 
          </CardTitle>
          <Details>{this.state.project.details}</Details>
        </CardBody>
        <Tech>{this.state.project.tech}</Tech>
      </Card>
    );
  }
}

export default Project;