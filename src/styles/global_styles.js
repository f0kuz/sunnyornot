import { createGlobalStyle } from "styled-components";
import { fontFaceCollection } from "../fonts/fonts";
import { style_variables } from "../js/common/constants/style_variables";

export const GlobalStyles = createGlobalStyle`
  ${fontFaceCollection}
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  body {
    font-family: ${style_variables.fonts.tekoRegular};
    color: ${style_variables.colors.darkerViolet};
    font-size: 20px;
    background: ${style_variables.colors.mainBg};
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 10px 0 8px;
  }
  p {
    margin: 0;
  }
`;
