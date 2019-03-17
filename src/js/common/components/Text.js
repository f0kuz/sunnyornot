import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { style_variables } from "../constants/style_variables";

const fontsDict = {
  bold: "tekoBold",
  light: "tekoLight",
  regular: "tekoRegular",
  semiBold: "tekoSemiBold"
};

const Wrapper = styled.p`
  margin: 2px 6px;
  font-family: ${props => style_variables.fonts[fontsDict[props.fontFamily]]};
  font-size: ${props => props.fontSize};
`;

const Text = ({ value, fontSize, fontFamily }) => (
  <Wrapper fontSize={fontSize} fontFamily={fontFamily}>
    {value}{" "}
  </Wrapper>
);

Text.propTypes = {
  value: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.oneOf(["bold", "light", "regular", "semiBold"])
};

Text.defaultProps = {
  fontSize: "18px",
  fontFamily: "light"
};

export default Text;
