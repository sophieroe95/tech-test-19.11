import React from "react";
import { render } from "@testing-library/react";
import WeatherAppMain from "./WeatherAppMain";

describe("WeatherAppMain tests", () => {
  it("should render", () => {
    expect(render(<WeatherAppMain />)).toBeTruthy();
  });
});
