/* eslint-disable no-undef */
import * as actionTypes from "./../actions/weather_details_action_types";
import { weatherDetailsReducer } from "./weather_details_reducer";

describe("weather reducer", () => {
  it("should return the initial state", () => {
    expect(weatherDetailsReducer(undefined, {})).toEqual({
      weatherDetails: [],
      visibleDayIdx: 0,
      dayTriggerIsVisible: false,
      cityId: 0,
      error: null,
      loading: true
    });
  });

  it("should correctly update visibleDayIdx state", () => {
    expect(
      weatherDetailsReducer(
        {
          weatherDetails: [],
          visibleDayIdx: 0,
          dayTriggerIsVisible: false,
          cityId: 0,
          error: null,
          loading: true
        },
        {
          type: actionTypes.SHOW_WEATHER_DETAILS_FOR_SELECTED_DAY,
          selectedDayIdx: 1
        }
      )
    ).toEqual({
      weatherDetails: [],
      visibleDayIdx: 1,
      dayTriggerIsVisible: true,
      cityId: 0,
      error: null,
      loading: true
    });
  });
});
