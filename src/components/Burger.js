import React, { useState } from 'react'
import styled from 'styled-components'
import SideNav from "../components/SideNav";
import { media, mixins, Section, theme, Button } from '../styles';

const { colors } = theme;

const HamBurgerIcon = styled.div`
    z-index: 900;
    margin: 10px;
`;
const StyledHamburger = styled.label`
    display: none;
    cursor: pointer;
    input {
    display: none;
    & + div {
        width: 20px;
        height: 14px;
        position: relative;
        div {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        transition: transform 0.5s ease;
        span {
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            &:first-child {
            top: 0;
            &:before,
            &:after {
                top: 0;
            }
            }
            &:last-child {
            bottom: 0;
            &:before,
            &:after {
                bottom: 0;
            }
            }
            &:before,
            &:after {
            content: "";
            display: block;
            width: 47%;
            height: 2px;
            border-radius: 1px;
            background: ${colors.mutedBlack};
            position: absolute;
            -webkit-backface-visibility: hidden;
            transition: transform 0.5s ease, border-radius 0.3s ease,
                background 0.4s ease;
            }
            &:before {
            left: 0;
            transform-origin: 0 50%;
            transform: translate(1px, 0) scaleX(1.1);
            }
            &:after {
            right: 0;
            transform-origin: 100% 50%;
            transform: translate(-1px, 0) scaleX(1.1);
            }
        }
        }
        svg {
        display: block;
        fill: none;
        stroke: ${colors.mutedBlack};
        stroke-width: 2px;
        width: 44px;
        height: 44px;
        stroke-linecap: round;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -22px 0 0 -22px;
        stroke-dasharray: 0 82.801 8 82.801;
        stroke-dashoffset: 82.801;
        transform-origin: 50% 50%;
        -webkit-backface-visibility: hidden;
        transform: scale(1);
        transition: stroke-dashoffset 0.5s ease, stroke-dasharray 0.6s ease,
            transform 0.5s ease, stroke 0.4s ease;
        &:nth-child(3) {
            transform: rotate(180deg) scale(1);
        }
        }
    }
    &:checked + div {
        div {
        transform: rotate(90deg);
        span {
            &:before,
            &:after {
            background: ${colors.mutedBlack};
            }
            &:first-child {
            &:before {
                transform: rotate(45deg) translate(2.2px, -3px) scaleX(1.05);
            }
            &:after {
                transform: rotate(-45deg) translate(-2.2px, -3px) scaleX(1.05);
            }
            }
            &:last-child {
            &:before {
                transform: rotate(-45deg) translate(2.2px, 3px) scaleX(1.05);
            }
            &:after {
                transform: rotate(45deg) translate(-2.2px, 3px) scaleX(1.05);
            }
            }
        }
        }
        svg {
        stroke-dashoffset: 0;
        stroke-dasharray: 0 50 0 50;
        transform: rotate(90deg);
        stroke: ${colors.mutedBlack};
        animation: cssAnimation 0s ease-in 0.35s forwards;
        @keyframes cssAnimation {
            0% {
            opacity: 0.8;
            }
            100% {
            opacity: 0;
            }
        }
        &:nth-child(3) {
            transform: rotate(270deg);
        }
        }
    }
    }
    ${media.tablet`
    display:block;
    `},
    ${media.thone`
    display:block;
    `};
    ${media.phablet`
    display:block;
    `};  
`;

class Burger extends React.Component {
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
            <React.Fragment>
                {/* <HamBurgerIcon>
                    <StyledHamburger open={this.state.open} onClick={() => this.setState({open: false})}>
                        <input type="checkbox"></input>
                        <div>
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                            <svg>
                                <use xlinkHref="#path" />
                            </svg>
                            <svg>
                                <use xlinkHref="#path" />
                            </svg>
                        </div>
                    </StyledHamburger>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: "none" }}
                    >
                        <symbol
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 44 44"
                            id="path"
                        >
                            <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
                        </symbol>
                    </svg>
                </HamBurgerIcon> */}
                <SideNav open={this.state.open} brand={brand} links={links} />
            </React.Fragment>
        )
    }

}

export default Burger;
