import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { theme, media, mixins } from "../styles";

const { transition,colors,fonts,easing } = theme;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: 0.25rem;
`;
const CardBody = styled.div`
  padding: 1.5rem 1.5rem;
`;
const CardTitle = styled.div`
  letter-spacing: 1px;
  font-size: 18px;
  text-transform: capitalize;
  p {
    text-align: center;
  }
`;
const SkillTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  ${media.tablet`font-size: 18px;`};
  ${media.phablet`font-size: 16px;`};
  ${media.phone`font-size: 16px;`};
`
const Tech = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 0 0 5px;
  ${media.tablet`font-size: 16px;`};
  ${media.phablet`font-size: 16px;`};
  ${media.phone`font-size: 14px;`};
`

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: props.skills,
    };
  }
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <SkillTitle>{this.state.skills.title}</SkillTitle>
          </CardTitle>
          {this.state.skills.skills.map((skill, i) => {
            return <Tech key={i}>{skill}</Tech>
          })}
        </CardBody>
      </Card>
    );
  }
}

export default Skill;
