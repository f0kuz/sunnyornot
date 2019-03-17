import * as actionTypes from "../actions/action_types";
import { updateObject } from "../../common/utilities/utility";

const initialState = {
  weatherDetails: [],
  visibleDayIdx: 0,
  error: null,
  loading: true
};

const initiateFetchWeatherDetailsDataReducer = state => {
  return updateObject(state, { loading: true });
};

const successFetchWeatherDetailsDataReducer = (state, action) => {
  return updateObject(state, {
    weatherDetails: action.weatherDetails,
    loading: false
  });
};

const failFetchWeatherDetailsDataReducer = state => {
  return updateObject(state, { loading: false });
};

export const weatherDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIATE_FETCH_WEATHER_DETAILS_DATA:
      return initiateFetchWeatherDetailsDataReducer(state);
    case actionTypes.SUCCESS_FETCH_WEATHER_DETAILS_DATA:
      return successFetchWeatherDetailsDataReducer(state, action);
    case actionTypes.FAIL_FETCH_WEATHER_DETAILS_DATA:
      return failFetchWeatherDetailsDataReducer(state);
    default:
      return state;
  }
};
