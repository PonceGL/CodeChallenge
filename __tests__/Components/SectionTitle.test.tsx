import React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import { colors } from "../../src/utils/colors";
import SectionTitle from "../../src/components/SectionTitle";

describe("SectionTitle", () => {
  const greeting = "Hola Que hace!";
  let sectionTitle: RenderAPI;

  beforeEach(() => {
    sectionTitle = render(<SectionTitle text={greeting} />);
  });

  test("Should render correctly", () => {
    expect(sectionTitle).toBeDefined();
  });

  test("It should always display a text", () => {
    const textContent = sectionTitle.getByText(greeting);
    expect(textContent).toHaveTextContent(greeting);
  });

  test("The text should be in one color", () => {
    const textContent = sectionTitle.getByText(greeting);
    expect(textContent).toHaveStyle({ color: colors.gray });
  });
});
