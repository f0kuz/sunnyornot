import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as actions from "../actions/weather_details_actions";
import { CITY } from "../../common/constants/weather_constants";
import Divider from "../../common/components/Divider";
import MainDay from "../components/MainDay";
import RestDays from "../components/RestDays";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

class WeatherDetails extends Component {
  componentDidMount() {
    const { fetchWeatherDetails, cityId } = this.props;

    fetchWeatherDetails(CITY[cityId].id);
  }

  render() {
    return (
      <Wrapper id="weather-details">
        <MainDay />
        <Divider />
        <RestDays />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchWeatherDetails: cityId =>
      dispatch(actions.startFetchWeatherDetailsAction(cityId))
  };
};

const mapStateToProps = state => {
  return {
    cityId: state.weatherDetailsReducer.cityId
  };
};

WeatherDetails.propTypes = {
  fetchWeatherDetails: PropTypes.func,
  cityId: PropTypes.number
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherDetails);
