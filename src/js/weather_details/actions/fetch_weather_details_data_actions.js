import * as actionTypes from "./action_types";

export const initiateFetchWeatherDetailsDataAction = () => {
  return {
    type: actionTypes.INITIATE_FETCH_WEATHER_DETAILS_DATA
  };
};

export const startFetchWeatherDetailsDataAction = id => {
  return {
    type: actionTypes.START_FETCH_WEATHER_DETAILS_DATA,
    id
  };
};

export const successFetchWeatherDetailsDataAction = weatherDetails => {
  return {
    type: actionTypes.SUCCESS_FETCH_WEATHER_DETAILS_DATA,
    weatherDetails
  };
};

export const failFetchWeatherDetailsDataAction = () => {
  return {
    type: actionTypes.FAIL_FETCH_WEATHER_DETAILS_DATA
  };
};
