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
    this.props.fetchWeatherDetailsData(CITY[Math.floor(Math.random() * 4)].id);
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
    fetchWeatherDetailsData: id =>
      dispatch(actions.startFetchWeatherDetailsAction(id))
  };
};

WeatherDetails.propTypes = {
  fetchWeatherDetailsData: PropTypes.func
};

export default connect(
  undefined,
  mapDispatchToProps
)(WeatherDetails);
