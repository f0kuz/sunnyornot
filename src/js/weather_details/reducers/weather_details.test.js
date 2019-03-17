/* eslint-disable no-undef */
import { weatherDetailsReducer } from "./weather_details_reducer";

describe("weather reducer", () => {
  it("should return the initial state", () => {
    expect(weatherDetailsReducer(undefined, {})).toEqual({
      weatherDetails: [],
      visibleDayIdx: 0,
      cityId: 0,
      error: null,
      loading: true
    });
  });
});
