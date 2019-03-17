import TekoBoldWoff from "./Teko-Bold.woff";
import TekoLightWoff from "./Teko-Light.woff";
import TekoRegularWoff from "./Teko-Regular.woff";
import TekoSemiBoldWoff from "./Teko-SemiBold.woff";

const FontFace = (name, woff) => `
  @font-face {
    font-family: '${name}';
    src: url('${woff}');
    font-weight: normal !important;
    font-style: normal !important;
    font-stretch: normal !important;
  }
`;

const TekoBold = FontFace("TekoBold", TekoBoldWoff);
const TekoLight = FontFace("TekoLight", TekoLightWoff);
const TekoRegular = FontFace("TekoRegular", TekoRegularWoff);
const TekoSemiBold = FontFace("Teko-SemiBold", TekoSemiBoldWoff);

export const fontFaceCollection = `
  ${TekoBold}
  ${TekoLight}
  ${TekoRegular}
  ${TekoSemiBold}
`;
