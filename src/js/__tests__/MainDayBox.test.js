// TODO: learn to correctly mock rendered UI which is based on async data

import React from "react";
import { render, cleanup, wait } from "react-testing-library";
import "jest-dom/extend-expect";
import "jest-styled-components";
import * as axios from "axios";
import MockAxios from "axios-mock-adapter";

import MainDayBox from "./../weather_details/components/MainDayBox";
import { store } from "../app/app";
import { Provider } from "react-redux";

afterEach(cleanup);

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });

afterAll(() => mock.restore());

jest.mock("react-transition-group", () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn(props =>
    props.in ? <FakeTransition>{props.children}</FakeTransition> : null
  );
  return { CSSTransition: FakeCSSTransition, Transition: FakeTransition };
});

test("TodayTrigger is correctly rendered", async () => {
  mock.onGet().replyOnce(200, {
    loading: false,
    dayTriggerIsVisible: true
  });

  const { getByTestId } = render(
    <Provider store={store}>
      <MainDayBox dayTriggerIsVisible={true} />
    </Provider>
  );

  expect(getByTestId("CompLoader")).toBeTruthy();

  // await wait(() => expect(getByTestId("CompLoader")).not.toBeTruthy());

  // expect(getByTestId("CompTodayTrigger")).toBeTruthy();

  // fireEvent.click(getByTestId("CompTodayTrigger"));
  //
  // expect(getByTestId("CompTodayTrigger")).toBeNull();
});
