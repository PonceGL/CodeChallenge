import React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import Moves from "../../src/components/Moves";
import { useNavigation } from "@react-navigation/native";
import { DetailsScreenProps } from "../../src/interfaces/Navigation";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe("Moves", () => {
  useNavigation<DetailsScreenProps>();

  let moves: RenderAPI;
  const itemsTest = [
    {
      createdAt: "2022-12-09T06:34:25.607Z",
      product: "Handmade Metal Shoes",
      points: 16434,
      image: "https://loremflickr.com/640/480/transport",
      is_redemption: false,
      id: "1",
    },
    {
      createdAt: "2022-12-09T17:02:51.904Z",
      product: "Recycled Plastic Tuna",
      points: 92984,
      image: "https://loremflickr.com/640/480/technics",
      is_redemption: false,
      id: "2",
    },
    {
      createdAt: "2022-12-09T10:20:00.909Z",
      product: "Fantastic Granite Bacon",
      points: 42416,
      image: "https://loremflickr.com/640/480/technics",
      is_redemption: false,
      id: "3",
    },
  ];

  beforeEach(() => {
    moves = render(<Moves data={itemsTest} />);
  });

  test("Should render correctly", () => {
    expect(moves).toBeDefined();
  });

  test("Should display title correctly", () => {
    const message = moves.getByText("TUS MOVIMIENTOS");
    expect(message).toBeDefined();
  });

  test("It should correctly render the list of elements", () => {
    const text = itemsTest[0].product;
    const counterText = moves.getByText(text);
    expect(counterText).toHaveTextContent(text);
  });
});
