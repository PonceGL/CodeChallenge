import React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import { colors } from "../../src/utils/colors";
import { formatNumber } from "../../src/utils/tools";
import Counter from "../../src/components/PointCounter/Counter";

describe("Counter", () => {
  const totalPoints = 34000;
  const pointText = `${formatNumber(totalPoints)} pts`;
  let counter: RenderAPI;

  beforeEach(() => {
    counter = render(<Counter totalPoints={totalPoints} />);
  });

  test("Should render correctly", () => {
    const counterText = counter.getByText(pointText);
    expect(counterText).toBeDefined();
  });

  test("Should keep the text in one line", () => {
    const counterText = counter.getByText(pointText);
    expect(counterText).toBeDefined();
    expect(counterText).toHaveProp("numberOfLines", 1);
    expect(counterText).toHaveProp("ellipsizeMode", "tail");
  });

  test("The background should be in one color", () => {
    const counterText = counter.getByTestId("counter-text");
    expect(counterText).toHaveStyle({ backgroundColor: colors.secondary });
  });
});
