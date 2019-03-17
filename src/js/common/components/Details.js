import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { style_variables } from "../constants/style_variables";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  width: 100%;
  padding: 10px 4px;

  @media (max-width: ${style_variables.rwd.mobile._768}) {
    padding-bottom: 0;
  }
`;

const Details = ({ children }) => <Wrapper>{children}</Wrapper>;

Details.propTypes = {
  children: PropTypes.array
};

export default Details;
