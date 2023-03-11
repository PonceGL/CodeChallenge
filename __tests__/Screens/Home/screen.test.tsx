import React from "react";
import renderer, { ReactTestRenderer } from "react-test-renderer";
import Home from "../../../src/screens/Home";

describe("Home", () => {
  const element = (): ReactTestRenderer => {
    const home = renderer.create(<Home />);
    return home;
  };

  test("should render correctly", () => {
    const home: ReactTestRenderer = element();
    const tree = home.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
