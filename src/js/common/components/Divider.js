import React from "react";
import styled from "styled-components";
import { style_variables } from "../constants/style_variables";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background: ${style_variables.colors.darkViolet};
  margin-top: 20px;
  ::before {
    content: "";
    position: absolute;
    bottom: -1px;
    height: 2px;
    left: 1px;
    right: -1px;
    background: ${style_variables.colors.red};
    opacity: 0.4;
  }
`;

const Divider = () => <Wrapper />;

export default Divider;
