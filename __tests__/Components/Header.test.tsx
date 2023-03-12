import React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import Header from "../../src/components/Header";

describe("Header", () => {
  let header: RenderAPI;

  beforeEach(() => {
    header = render(<Header />);
  });

  test("Should render correctly", () => {
    expect(header).toBeDefined();
  });

  test("Should display a welcome message", () => {
    const message = header.getByText("Bienvenido de vuelta!");
    expect(message).toBeDefined();
  });

  test("It should display the user's name", () => {
    const message = header.getByText("Ruben Rodriguez");
    expect(message).toBeDefined();
  });
});
