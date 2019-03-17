import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { style_variables } from "../constants/style_variables";

const Wrapper = styled.p`
  width: 100%;
  text-align: center;
  color: ${props =>
    props.kind === "max"
      ? style_variables.colors.red
      : style_variables.colors.blue}};
`;

const SlashValue = styled.span`
  font-size: 16px;
`;

const TemperatureValue = ({ value, kind }) => (
  <Wrapper kind={kind}>
    {value}&#176;&nbsp;C
    <SlashValue>/{kind}</SlashValue>
  </Wrapper>
);

TemperatureValue.propTypes = {
  value: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired
};

export default TemperatureValue;
