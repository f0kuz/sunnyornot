import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { style_variables } from "../../common/constants/style_variables";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 30px;
  border-radius: 2px;
  background: ${style_variables.colors.lighterViolet};
  cursor: pointer;
  transition: all 0.2s ease-in;
  transform: translateY(0);
  will-change: transform, opacity;
  &:hover {
    opacity: 0.95;
    transform: translateY(2px);
  }
`;

const DayHolder = ({ children, idx, showWeatherDetailsForThisDay }) => (
  <Wrapper onClick={() => showWeatherDetailsForThisDay(idx)}>
    {children}
  </Wrapper>
);

DayHolder.propTypes = {
  children: PropTypes.any,
  idx: PropTypes.any,
  showWeatherDetailsForThisDay: PropTypes.any,
};

export default DayHolder;
