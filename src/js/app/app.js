import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import styled from "styled-components";
import Normalize from "react-normalize";

import { rootReducer } from "./reducers/app_reducer";
import { watchWeatherDetails } from "../weather_details/watchers/weather_details_watcher";
import { GlobalStyles } from "../../styles/global_styles";
import WeatherDetails from "../weather_details/view/WeatherDetails";

const Main = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchWeatherDetails);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Normalize />
        <GlobalStyles />
        <header id="app-header">SUNNY OR NOT</header>
        <Main>
          <WeatherDetails />
        </Main>
        <footer id="app-footer">PLACEHOLDER</footer>
      </Provider>
    );
  }
}

export default App;
