import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

import { style_variables } from "../../common/constants/style_variables";
import * as actions from "../actions/weather_details_actions";
import Divider from "../../common/components/Divider";
import Details from "../../common/components/Details";
import Text from "../../common/components/Text";
import withLoader from "../../common/components/withLoader";
import DayBox from "./DayBox";

const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-column: 1/5;
  padding: 20px 30px;
  border-radius: 2px;
  background: ${style_variables.colors.lighterViolet};
  overflow: hidden;

  h2 {
    font-size: 44px;
  }

  @media (max-width: ${style_variables.rwd.mobile._768}) {
    grid-column: 1/-1;
    padding: 15px;
  }
`;

export const TodayTrigger = styled.div`
  position: absolute;
  left: 0;
  width: auto;
  padding: 6px 8px;
  background: ${style_variables.colors.darkViolet};
  color: ${style_variables.colors.lighterViolet};
  border-bottom-right-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  will-change: transform, opacity;
  transform: translateY(-15px);
  &:hover {
    opacity: 0.9;
  }

  &.trigger-enter {
    opacity: 0;
    transform: translateY(-50px);
  }
  &.trigger-enter-active {
    opacity: 1;
    transform: translateY(-15px);
    transition: all 300ms;
  }
  &.trigger-exit {
    opacity: 1;
    transform: translateY(-15px);
  }
  &.trigger-exit-active {
    opacity: 0;
    transform: translateY(-50px);
    transition: all 300ms;
  }
`;

const Translate = ({ children, ...props }) => {
  return (
    <CSSTransition {...props} timeout={300} classNames="trigger" unmountOnExit>
      {children}
    </CSSTransition>
  );
};

Translate.propTypes = {
  children: PropTypes.element
};

const MainDayBox = ({
  weatherDetails,
  visibleDayIdx,
  showWeatherDetailsForThisDay,
  dayTriggerIsVisible
}) => {
  return (
    <Wrapper>
      <Translate
        in={dayTriggerIsVisible}
        onEnter={() => showWeatherDetailsForThisDay(1)}
        onExited={() => showWeatherDetailsForThisDay(0)}
      >
        <TodayTrigger
          onClick={() => showWeatherDetailsForThisDay(0)}
          data-testid="CompTodayTrigger"
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Show today's data
        </TodayTrigger>
      </Translate>
      <DayBox weatherSource={weatherDetails[visibleDayIdx]} />

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
};

const mapStateToProps = state => {
  return {
    weatherDetails: state.weatherDetailsReducer.weatherDetails,
    loading: state.weatherDetailsReducer.loading,
    visibleDayIdx: state.weatherDetailsReducer.visibleDayIdx,
    dayTriggerIsVisible: state.weatherDetailsReducer.dayTriggerIsVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showWeatherDetailsForThisDay: selectedDayIdx =>
      dispatch(actions.showWeatherDetailsForSelectedDay(selectedDayIdx))
  };
};

MainDayBox.propTypes = {
  weatherDetails: PropTypes.array,
  visibleDayIdx: PropTypes.number,
  loading: PropTypes.bool,
  showWeatherDetailsForThisDay: PropTypes.func,
  dayTriggerIsVisible: PropTypes.bool
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLoader
)(MainDayBox);
