import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Day from "../../common/components/Day";
import TemperatureValue from "../../common/components/TemperatureValue";
import Text from "../../common/components/Text";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FlexHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ImageHolder = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  min-width: 50px;
`;

const DayBox = ({ weatherSource }) => (
  <Wrapper>
    <Day day={weatherSource.dayName} />
    <FlexHolder>
      <TemperatureValue value={weatherSource.tempMin} kind="min" />
      <ImageHolder>{weatherSource.icon}</ImageHolder>
      <TemperatureValue value={weatherSource.tempMax} kind="max" />
    </FlexHolder>
    <Text
      value={weatherSource.weatherMain}
      fontSize="22px"
      fontFamily="semiBold"
    />
  </Wrapper>
);

DayBox.propTypes = {
  weatherSource: PropTypes.object
};

export default DayBox;
