import React from "react";
import styled from "styled-components";
import { style_variables } from "../../common/constants/style_variables";
import Cities from "../components/Cities";

const Wrapper = styled.header`
  background: ${style_variables.colors.darkerViolet};
  padding: 10px 20px;
`;

const Holder = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;

  @media (max-width: 430px) {
    justify-content: center;
    padding: 10px 20px 0;
  }
`;

const HeaderLogo = styled.h1`
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
    <Holder>
      <HeaderLogo>SUNNY OR NOT</HeaderLogo>
      <Cities />
    </Holder>
  </Wrapper>
);

export default Header;
