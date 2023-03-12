import React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import { formatNumber } from "../../../src/utils/tools";
import Home from "../../../src/screens/Home";
import Counter from "../../../src/components/PointCounter/Counter";
import Header from "../../../src/components/Header";

describe("Home", () => {
  let home: RenderAPI;

  beforeEach(() => {
    home = render(<Home />);
  });

  test("should render correctly", () => {
    home.getByLabelText("Pantalla de inicio");
  });

  test("Should have the Header component", () => {
    const header = render(<Header />);
    expect(header).toBeDefined();
  });

  test("Should have the component that displays the available Points", () => {
    home.getByTestId("PointCounter");
  });

  test("Should have the title 'TUS PUNTOS'", () => {
    home.getByText("TUS PUNTOS");
  });

  test("It should show the name of the month 'Diciembre'", () => {
    home.getByText("Diciembre");
  });

  test("Should have the Counter component", () => {
    const totalPoints = 1000;
    const { getByText } = render(<Counter totalPoints={totalPoints} />);
    const counterText = getByText(`${formatNumber(totalPoints)} pts`);
    expect(counterText).toBeDefined();
  });
});
