import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App";

describe("<App/>", () => {
  const element = () => {
    const component = render(<App />);
    return { component };
  };

  test("should render correctly", () => {
    const { component } = element();
    expect(component).toBeDefined();
  });
});
