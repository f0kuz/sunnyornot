import React from "react";
import styled from "styled-components";
import { style_variables } from "../../common/constants/style_variables";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  grid-column: 6/-1;
  border-radius: 2px;
  background: ${style_variables.colors.lighterViolet};

  @media (max-width: ${style_variables.rwd.mobile._768}) {
    grid-column: 1/-1;
    height: 200px;
    margin-top: 10px;
  }
`;

// TODO: render chart of particular day data
const MainDayChart = () => <Wrapper>CHART PLACEHOLDER</Wrapper>;

export default MainDayChart;
