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
`;

// TODO: render chart of particular day data
const MainDayChart = () => <Wrapper>CHART PLACEHOLDER</Wrapper>;

export default MainDayChart;
