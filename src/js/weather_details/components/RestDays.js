import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import { compose } from "redux";

import { style_variables } from "../../common/constants/style_variables";
import * as actions from "../actions/weather_details_actions";
import DayBox from "./DayBox";
import withLoader from "../../common/components/withLoader";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(231px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 100%;
  margin-top: 30px;
`;

const DayHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 30px;
  border-radius: 2px;
  background: ${style_variables.colors.lighterViolet};
  cursor: pointer;
  transition: all 0.2s ease-in;
  transform: translateY(0);
  will-change: transform, opacity;
  &:hover {
    opacity: 0.95;
    transform: translateY(2px);
  }
`;

const RestDays = ({ weatherDetails, showWeatherDetailsForThisDay }) => (
  <Wrapper>
    {weatherDetails.map((day, idx) =>
      idx !== 0 ? (
        <DayHolder
          key={weatherDetails[idx].dayName}
          onClick={() => showWeatherDetailsForThisDay(idx)}
        >
          <DayBox weatherSource={weatherDetails[idx]} />
        </DayHolder>
      ) : null
    )}
  </Wrapper>
);

const mapStateToProps = state => {
  return {
    weatherDetails: state.weatherDetailsReducer.weatherDetails,
    loading: state.weatherDetailsReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showWeatherDetailsForThisDay: selectedDayIdx =>
      dispatch(actions.showWeatherDetailsForSelectedDay(selectedDayIdx))
  };
};

RestDays.propTypes = {
  weatherDetails: PropTypes.array,
  visibleDayIdx: PropTypes.number,
  loading: PropTypes.bool,
  showWeatherDetailsForThisDay: PropTypes.func
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLoader
)(RestDays);
