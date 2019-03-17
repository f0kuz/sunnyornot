import React from "react";
import styled from "styled-components";
import { style_variables } from "../../common/constants/style_variables";

const Wrapper = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${style_variables.colors.darkerViolet};
  padding: 0 20px;
`;

const HeaderLogo1 = styled.h1`
  color: ${style_variables.colors.lightViolet};
  font-size: 50px;
  margin: 0;
  transform: translateY(3px);

  @media (max-width: ${style_variables.rwd.mobile._768}) {
    font-size: 26px;
  }
`;

const Header = () => (
  <Wrapper>
    <HeaderLogo1>SUNNY OR NOT</HeaderLogo1>
  </Wrapper>
);

export default Header;
