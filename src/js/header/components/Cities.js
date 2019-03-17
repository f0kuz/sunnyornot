import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actions from "../../weather_details/actions/weather_details_actions";
import { CITY } from "../../common/constants/weather_constants";
import CityTrigger from "./CityTrigger";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 430px) {
    width: 100%;
    transform: translateY(8px);
  }
`;

const Cities = ({ fetchWeatherDetails }) => (
  <Wrapper>
    {CITY.map(city => (
      <CityTrigger
        key={city.id}
        text={city.name}
        cityId={city.id}
        fetchWeatherDetails={fetchWeatherDetails}
      />
    ))}
  </Wrapper>
);

const mapDispatchToProps = dispatch => {
  return {
    fetchWeatherDetails: cityId =>
      dispatch(actions.startFetchWeatherDetailsAction(cityId))
  };
};

Cities.propTypes = {
  fetchWeatherDetails: PropTypes.func
};

export default connect(
  undefined,
  mapDispatchToProps
)(Cities);
