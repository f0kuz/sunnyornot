import * as actionTypes from "./weather_details_action_types";

// FETCH WEATHER DETAILS
export const initiateFetchWeatherDetailsAction = () => {
  return {
    type: actionTypes.INITIATE_FETCH_WEATHER_DETAILS
  };
};

export const startFetchWeatherDetailsAction = id => {
  return {
    type: actionTypes.START_FETCH_WEATHER_DETAILS,
    id
  };
};

export const successFetchWeatherDetailsAction = weatherDetails => {
  return {
    type: actionTypes.SUCCESS_FETCH_WEATHER_DETAILS,
    weatherDetails
  };
};

export const failFetchWeatherDetailsAction = () => {
  return {
    type: actionTypes.FAIL_FETCH_WEATHER_DETAILS
  };
};

// MODIFY DISPLAY WEATHER
export const showWeatherDetailsForSelectedDay = selectedDayIdx => {
  return {
    type: actionTypes.SHOW_WEATHER_DETAILS_FOR_SELECTED_DAY,
    selectedDayIdx
  };
};
