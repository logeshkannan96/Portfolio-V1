import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { Link } from 'react-scroll';
import Burger from "../components/Burger";
import { theme, media, mixins } from "../styles";

const { colors, transition, easing } = theme;

const StyledContainer = styled.header`
  position: fixed;
  top: 0;
  padding: 0px 50px;
  z-index: 1000;
  background: ${colors.background};
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;
const StyledNav = styled.nav`
  ${mixins.flexBetween};
  padding: 25px 0;
  z-index: 2000;
`;
const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 300ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 300ms ease-out;
    transform: translate(0, -80%);
  }
`;
const Logo = styled.div``;
const NavLinks = styled(Link)`
  font-weight: 500;
  transition: 0.2s;
  &:hover,
  &:focus,
  &:after {
    color: ${colors.mutedBlack}80;
  }
`;

const Icon = styled.img`
  width: 45px;
  height: 45px;
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: props.brand,
      links: props.links,
      show: true,
      scrollPos: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos,
    });
  }

  render() {
    const { brand, links } = this.state;

    return (
      <Transition>
        <StyledContainer className={this.state.show ? "active" : "hidden"}>
          <StyledNav>
            <Logo>
              <NavLinks title={brand.name} to={brand.to}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                <Icon src={logo} />
              </NavLinks>
            </Logo>
            <Burger brand={brand} links={links}/>
          </StyledNav>
        </StyledContainer>
      </Transition>
    );
  }
}

export default Nav;
