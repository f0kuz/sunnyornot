import React from "react";
import styled from "styled-components";
import MainDayBox from "./MainDayBox";
import MainDayChart from "./MainDayChart";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
`;

const MainDay = () => (
  <Wrapper>
    <MainDayBox />
    <MainDayChart />
  </Wrapper>
);

export default MainDay;
