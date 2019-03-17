import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.h2`
  width: 100%;
  text-align: center;
  color: ;
`;

const Day = ({ day }) => <Wrapper>{day}</Wrapper>;

Day.propTypes = {
  day: PropTypes.string.isRequired
};

export default Day;
