import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  width: 100%;
  padding: 10px 4px;
`;

const Details = ({ children }) => <Wrapper>{children}</Wrapper>;

Details.propTypes = {
  children: PropTypes.array
};

export default Details;
