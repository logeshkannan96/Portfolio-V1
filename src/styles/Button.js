import styled from 'styled-components';
import { media, mixins, Section, theme } from "../styles";

const { fontSizes, colors } = theme;

const Button = styled.button`
    background: ${colors.mutedBlack};
    color: ${colors.white};
    outline: none !important;
    transition: all 0.3s ease;
    position: relative;
    border: 1px solid ${colors.mutedBlack};
    z-index: 1;
    font-size: ${fontSizes.base};
    ${media.phablet`font-size:${fontSizes.sm}`}
    ${media.tablet`font-size:${fontSizes.xs}`}
    &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        right: 0;
        background: ${colors.white};
        z-index: -1;
        transition: all 0.3s ease;
    }
    &:hover {
        color: ${colors.mutedBlack};
        &:after {
            left: 0;
            width: 100%;
    }
    &:active {
        transform: scale(0.99);
    }
`;

export default Button;
