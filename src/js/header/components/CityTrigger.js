import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { style_variables } from "../../common/constants/style_variables";

const Wrapper = styled.button.attrs({
  type: "button"
})`
  all: unset;
  cursor: pointer;
  padding: 8px 6px;
  color: ${style_variables.colors.red};
  font-family: ${style_variables.fonts.tekoSemiBold};
  font-size: 18px;
  margin: 4px;
`;

const CityTrigger = ({ text, cityId, fetchWeatherDetails }) => (
  <Wrapper onClick={() => fetchWeatherDetails(cityId)}>{text}</Wrapper>
);

CityTrigger.propTypes = {
  text: PropTypes.string,
  cityId: PropTypes.number,
  fetchWeatherDetails: PropTypes.func
};

export default CityTrigger;
