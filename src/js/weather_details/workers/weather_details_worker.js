import React from "react";
import { put } from "redux-saga/effects";
import axios from "axios";
import moment from "moment";

import * as actions from "../actions/weather_details_actions";
import { API, API_KEY } from "../../common/constants/api_constants";
import { chunkArray } from "../utilities/weather_utility";
import { collectNeededValues } from "../utilities/weather_utility";

export function* fetchAndProcessWeatherDetailsDataSaga(action) {
  try {
    yield put(actions.initiateFetchWeatherDetailsAction());

    const response = yield axios.get(
      `${API.GET_5DAY_WEATHER}id=${action.id}&units=metric&apikey=${API_KEY}`
    );
    const { list: details } = response.data;

    const chunkedDetails = chunkArray(details, 8);
    const weatherDetails = chunkedDetails.reduce((all, item, idx) => {
      all[idx] = {
        dayName: moment.unix(item[0].dt).format("dddd"),
        tempMin: Math.min(
          ...collectNeededValues(chunkedDetails, "main", "temp_min", idx)
        ).toFixed(0),
        tempMax: Math.max(
          ...collectNeededValues(chunkedDetails, "main", "temp_max", idx)
        ).toFixed(0),
        weatherMain: item[0].weather[0].main,
        avgWindSpeed: (
          collectNeededValues(chunkedDetails, "wind", "speed", idx).reduce(
            (acc, val) => acc + val,
            0
          ) / 8
        ).toPrecision(3),
        weatherDescription: item[0].weather[0].description,
        icon: (
          <img
            src={`http://openweathermap.org/img/w/${
              item[0].weather[0].icon
            }.png`}
            alt=""
          />
        )
      };

      return all;
    }, []);

    yield put(actions.successFetchWeatherDetailsAction(weatherDetails));
  } catch (error) {
    yield put(actions.failFetchWeatherDetailsAction(error.response.data.error));
  }
}
