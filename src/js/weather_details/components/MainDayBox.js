import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import styled from "styled-components";

import { style_variables } from "../../common/constants/style_variables";
import Day from "../../common/components/Day";
import TemperatureValue from "../../common/components/TemperatureValue";
import Divider from "../../common/components/Divider";
import Details from "../../common/components/Details";
import Text from "../../common/components/Text";
import withLoader from "../../common/components/withLoader";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-column: 1/5;
  padding: 20px 30px;
  border-radius: 2px;
  background: ${style_variables.colors.lighterViolet};
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

class MainDayBox extends Component {
  render() {
    const { weatherDetails, visibleDayIdx } = this.props;

    return (
      <Wrapper>
        <Day day={weatherDetails[visibleDayIdx].dayName} />
        <FlexHolder>
          <TemperatureValue
            value={weatherDetails[visibleDayIdx].tempMin}
            kind="min"
          />
          <ImageHolder>{weatherDetails[visibleDayIdx].icon}</ImageHolder>
          <TemperatureValue
            value={weatherDetails[visibleDayIdx].tempMax}
            kind="max"
          />
        </FlexHolder>
        <Text
          value={weatherDetails[visibleDayIdx].weatherMain}
          fontSize="22px"
          fontFamily="semiBold"
        />
        <Divider />
        <Details>
          <Text value="avg_wind_speed:" />
          <Text
            value={`${weatherDetails[visibleDayIdx].avgWindSpeed} m/s`}
            fontSize="20px"
            fontFamily="regular"
          />
          <Text value="description:" />
          <Text
            value={weatherDetails[visibleDayIdx].weatherDescription}
            fontSize="20px"
            fontFamily="regular"
          />
        </Details>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherDetails: state.weatherDetailsReducer.weatherDetails,
    loading: state.weatherDetailsReducer.loading,
    visibleDayIdx: state.weatherDetailsReducer.visibleDayIdx
  };
};

MainDayBox.propTypes = {
  weatherDetails: PropTypes.array,
  visibleDayIdx: PropTypes.number,
  loading: PropTypes.bool
};

export default compose(
  connect(mapStateToProps),
  withLoader
)(MainDayBox);
