import React from 'react'
import styled from 'styled-components'
import { theme, media, mixins } from "../styles";
import { Link } from 'react-scroll';

const { colors, transition, easing } = theme;

const Menu = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  ${media.tablet`
    padding: 20px 0;
    flex-flow: column nowrap;
    background-color: ${colors.mutedBlack};
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 50vh;
    justify-content: space-around;
    color: ${colors.white};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
  `},
  ${media.thone`
   
  `};
  ${media.phablet`
    
  `};
`;
const NavItems = styled.li`
  margin-left: 10px;
  margin-right: 10px;
  ${media.tablet`
    transition: ${transition};
  `},
  ${media.thone`
    transition: ${transition};
  `};
  ${media.phablet`
    transition: ${transition};
  `};
`;
const StyledResumeBtn = styled.li`
  font-weight: 500;
  margin-left: 10px;
  border: 1px solid ${colors.mutedBlack};
  border-radius: 2rem;
  padding: 0.5rem 0.75rem;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover,
  &:focus,
  &:after {
    color: ${colors.mutedBlack}90;
  }
  ${media.tablet`
    border: 1px solid ${colors.white};
  `},
  ${media.thone`
  `};
  ${media.phablet`
  `};
`;
const NavLinks = styled(Link)`
  font-weight: 500;
  transition: 0.2s;
  &:hover,
  &:focus,
  &:after {
    color: ${colors.mutedBlack}80;
  }
`;
const ExternalLink = styled.a`
  font-weight: 500;
  transition: 0.2s;
  &:hover,
  &:focus,
  &:after {
    color: ${colors.mutedBlack}80;
  }
`
const BtnLink = styled.a`
  
`

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: props.brand,
      links: props.links,
      open: props.open,
      show: true,
      scrollPos: 0,
    };
  }

  render() {

    const { brand, links, open } = this.state;

    return (
      <Menu open={open}>
        {links &&
          links.map(({ name, to, url }, i) => {
            return (
              <NavItems key={i}>
                {url ? <ExternalLink target="_blank" href={url}>{name}</ExternalLink> :
                  <NavLinks
                    to={to}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >{name}</NavLinks>}
              </NavItems>
            );
          })}
        <BtnLink href={process.env.PUBLIC_URL + "/logesh-resume.pdf"} target="_blank" rel="nofollow noopener noreferrer">
          <StyledResumeBtn>Resume</StyledResumeBtn>
        </BtnLink>
      </Menu>
    )
  }

}

export default SideNav;
