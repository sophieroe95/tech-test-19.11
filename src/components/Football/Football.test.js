import React from "react";
import { render } from "@testing-library/react";
import Football from "./Football";

describe("Football tests", () => {
  it("should render", () => {
    expect(render(<Football />)).toBeTruthy();
  });
});
