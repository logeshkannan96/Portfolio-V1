import { createGlobalStyle } from "styled-components/macro";
import theme from "./theme";
const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  /* poppins-100 */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100;
    src: url('../fonts/Poppins/Poppins-Thin.woff'); 
    src: local('Poppins Thin'), local('Poppins-Thin'),
    url('../fonts/Poppins/Poppins-Thin.woff') format('woff'),
  }

  /* poppins-100italic */
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 100;
    src: url('../fonts/Poppins/Poppins-ThinItalic.woff.woff'); 
    src: local('Poppins Thin Italic'), local('Poppins-ThinItalic'),
    url('../fonts/Poppins/Poppins-ThinItalic.woff') format('woff'),
  }

  /* poppins-200 */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 200;
    src: url('../fonts/Poppins/Poppins-ExtraLight.woff'); 
    src: local('Poppins ExtraLight'), local('Poppins-ExtraLight'),
    url('../fonts/Poppins/Poppins-ExtraLight.woff') format('woff'),
  }

  /* poppins-200italic */
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 200;
    src: url('../fonts/Poppins/Poppins-ExtraLightItalic.woff'); 
    src: local('Poppins ExtraLight Italic'), local('Poppins-ExtraLightItalic'),
    url('../fonts/Poppins/Poppins-ExtraLightItalic.woff') format('woff'),
  }

  /* poppins-300 */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: url('../fonts/Poppins/Poppins-Light.woff'); 
    src: local('Poppins Light'), local('Poppins-Light'),
    url('../fonts/Poppins/Poppins-Light.woff') format('woff'),
  }

  /* poppins-300italic */
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 300;
    src: url('../fonts/Poppins/Poppins-LightItalic.woff'); 
    src: local('Poppins Light Italic'), local('Poppins-LightItalic'),
    url('../fonts/Poppins/Poppins-LightItalic.woff') format('woff'),
  }

  /* poppins-regular */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/Poppins/Poppins-Regular.woff'); 
    src: local('Poppins Regular'), local('Poppins-Regular'),
    url('../fonts/Poppins/Poppins-Regular.woff') format('woff'),
  }

  /* poppins-italic */
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    src: url('../fonts/Poppins/Poppins-Italic.woff'); 
    src: local('Poppins Italic'), local('Poppins-Italic'),
    url('../fonts/Poppins/Poppins-Italic.woff') format('woff'),
  }

  /* poppins-500italic */
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 500;
    src: url('../fonts/Poppins/Poppins-MediumItalic.woff'); 
    src: local('Poppins Medium Italic'), local('Poppins-MediumItalic'),
    url('../fonts/Poppins/Poppins-MediumItalic.woff') format('woff'),
  }

  /* poppins-500 */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url('../fonts/Poppins/Poppins-Medium.woff'); 
    src: local('Poppins Medium'), local('Poppins-Medium'),
    url('../fonts/Poppins/Poppins-Medium.woff') format('woff'),
  }

  /* poppins-600 */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('../fonts/Poppins/Poppins-SemiBold.woff'); 
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
    url('../fonts/Poppins/Poppins-SemiBold.woff') format('woff'),
  }

  /* poppins-600italic */
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 600;
    src: url('../fonts/Poppins/Poppins-SemiBoldItalic.woff'); 
    src: local('Poppins SemiBold Italic'), local('Poppins-SemiBoldItalic'),
    url('../fonts/Poppins/Poppins-SemiBoldItalic.woff') format('woff'),
  }

  /* poppins-700 */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: url('../fonts/Poppins/Poppins-Bold.woff'); 
    src: local('Poppins Bold'), local('Poppins-Bold'),
    url('../fonts/Poppins/Poppins-Bold.woff') format('woff'),
  }

  /* poppins-700italic */
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 700;
    src: url('../fonts/Poppins/Poppins-BoldItalic.woff'); 
    src: local('Poppins Bold Italic'), local('Poppins-BoldItalic'),
    url('../fonts/Poppins/Poppins-BoldItalic.woff') format('woff'),
  }

  /* poppins-800 */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    src: url('../fonts/Poppins/Poppins-ExtraBold.woff'); 
    src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'),
    url('../fonts/Poppins/Poppins-ExtraBold.woff') format('woff'),
  }

  /* poppins-800italic */
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 800;
    src: url('../fonts/Poppins/Poppins-ExtraBoldItalic.woff'); 
    src: local('Poppins ExtraBold Italic'), local('Poppins-ExtraBoldItalic'),
    url('../fonts/Poppins/Poppins-ExtraBoldItalic.woff') format('woff'),
  }

  /* poppins-900italic */
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 900;
    src: url('../fonts/Poppins/Poppins-BlackItalic.woff'); 
    src: local('Poppins Black Italic'), local('Poppins-BlackItalic'),
    url('../fonts/Poppins/Poppins-BlackItalic.woff') format('woff'),
  }

  /* poppins-900 */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 900;
    src: url('../fonts/Poppins/Poppins-Black.woff'); 
    src: local('Poppins Black'), local('Poppins-Black'),
    url('../fonts/Poppins/Poppins-Black.woff') format('woff'),
  }

  // Work Sans
  @font-face {
    font-family: 'Work Sans Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Work Sans Regular'), url('../fonts/WorkSans/WorkSans-Regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Work Sans Thin';
    font-style: normal;
    font-weight: normal;
    src: local('Work Sans Thin'), url('../fonts/WorkSans/WorkSans-Thin.woff') format('woff');
  }

  @font-face {
    font-family: 'Work Sans ExtraLight';
    font-style: normal;
    font-weight: normal;
    src: local('Work Sans ExtraLight'), url('../fonts/WorkSans/WorkSans-ExtraLight.woff') format('woff');
  }

  @font-face {
    font-family: 'Work Sans Light';
    font-style: normal;
    font-weight: normal;
    src: local('Work Sans Light'), url('../fonts/WorkSans/WorkSans-Light.woff') format('woff');
  }

  @font-face {
    font-family: 'Work Sans Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Work Sans Medium'), url('../fonts/WorkSans/WorkSans-Medium.woff') format('woff');
  }

  @font-face {
    font-family: 'Work Sans SemiBold';
    font-style: normal;
    font-weight: normal;
    src: local('Work Sans SemiBold'), url('../fonts/WorkSans/WorkSans-SemiBold.woff') format('woff');
  }

  @font-face {
    font-family: 'Work Sans Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Work Sans Bold'), url('../fonts/WorkSans/WorkSans-Bold.woff') format('woff');
  }


  @font-face {
    font-family: 'Work Sans ExtraBold';
    font-style: normal;
    font-weight: normal;
    src: local('Work Sans ExtraBold'), url('../fonts/WorkSans/WorkSans-ExtraBold.woff') format('woff');
  }


  @font-face {
    font-family: 'Work Sans Black';
    font-style: normal;
    font-weight: normal;
    src: local('Work Sans Black'), url('../fonts/WorkSans/WorkSans-Black.woff') format('woff');
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }

  body {
    font-family: ${fonts.primary};
    color: ${colors.mutedBlack};
    background-color: ${colors.background};
    min-height: 100%;
    height: 100vh;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -.025em;
    margin: 0 0 10px;
    font-weight: 700;
  }

  h1, h2, h3 {
    font-weight: 900;
  }

  p {
    margin: 0 0 10px;
  }

  ol, ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: ${theme.transition};
    cursor: pointer;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  input {
    border-radius: 0;
    outline: 0;
    &::placeholder {
      opacity: 0.7;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  button {
    display: inline-block;
    font-family: ${fonts.primary};
    font-size: ${fontSizes.base};
    font-weight: 500;
    border: 0;
    padding: 10px 20px;
    cursor: pointer;
    transition: ${theme.transition};
  }
`;

export default GlobalStyle;
