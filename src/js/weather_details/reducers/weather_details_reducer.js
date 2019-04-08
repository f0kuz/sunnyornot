import * as actionTypes from "../actions/weather_details_action_types";
import { updateObject } from "../../common/utilities/utility";

const initialState = {
  weatherDetails: [],
  visibleDayIdx: 0,
  dayTriggerIsVisible: false,
  cityId: 0,
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

const showWeatherDetailsForSelectedDayReducer = (state, action) => {
  return updateObject(state, {
    visibleDayIdx: action.selectedDayIdx,
    dayTriggerIsVisible: action.selectedDayIdx !== 0
  });
};

export const weatherDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INITIATE_FETCH_WEATHER_DETAILS:
      return initiateFetchWeatherDetailsDataReducer(state);
    case actionTypes.SUCCESS_FETCH_WEATHER_DETAILS:
      return successFetchWeatherDetailsDataReducer(state, action);
    case actionTypes.FAIL_FETCH_WEATHER_DETAILS:
      return failFetchWeatherDetailsDataReducer(state);
    case actionTypes.SHOW_WEATHER_DETAILS_FOR_SELECTED_DAY:
      return showWeatherDetailsForSelectedDayReducer(state, action);
    default:
      return state;
  }
};
