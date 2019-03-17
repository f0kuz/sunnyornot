import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { style_variables } from "../constants/style_variables";

const Wrapper = styled.h2`
  width: 100%;
  text-align: center;

  @media (max-width: ${style_variables.rwd.mobile._768}) {
    margin: 0;
  }
`;

const Day = ({ day }) => <Wrapper>{day}</Wrapper>;

Day.propTypes = {
  day: PropTypes.string.isRequired
};

export default Day;
