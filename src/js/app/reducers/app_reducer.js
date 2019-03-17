import { combineReducers } from "redux";
import { weatherDetailsReducer } from "../../weather_details/reducers/weather_details_reducer";

export const rootReducer = combineReducers({
  weatherDetailsReducer
});
