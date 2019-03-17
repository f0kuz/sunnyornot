import { takeEvery, all } from "redux-saga/effects";

import * as actionTypes from "../actions/action_types";
import { fetchAndProcessWeatherDetailsDataSaga } from "../workers/weather_details_worker";

export function* watchWeatherDetails() {
  yield all([
    takeEvery(
      actionTypes.START_FETCH_WEATHER_DETAILS_DATA,
      fetchAndProcessWeatherDetailsDataSaga
    )
  ]);
}
