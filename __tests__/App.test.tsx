import "react-native";
import React from "react";
import App from "../App";

import renderer, { ReactTestRenderer } from "react-test-renderer";

describe("App", () => {
  const element = (): ReactTestRenderer => {
    const app = renderer.create(<App />);
    return app;
  };

  test("should render correctly", () => {
    const app: ReactTestRenderer = element();
    const tree = app.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
