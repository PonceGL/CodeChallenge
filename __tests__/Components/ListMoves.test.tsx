import React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import { useNavigation } from "@react-navigation/native";
import { DetailsScreenProps } from "../../src/interfaces/Navigation";
import { Product } from "../../src/interfaces/Products";
import { colors } from "../../src/utils/colors";
import ListMoves from "../../src/components/Moves/ListMoves";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe("ListMoves", () => {
  useNavigation<DetailsScreenProps>();

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
  const element = (items: Product[] | null): RenderAPI => {
    const listMoves = render(<ListMoves data={items} />);
    return listMoves;
  };

  test("Should render correctly", () => {
    const listMoves = element(itemsTest);
    expect(listMoves).toBeDefined();
  });

  test("Should render EmptyComponent correctly", () => {
    const listMoves = element(null);
    const emptyComponent = listMoves.getByTestId("empty-component");
    expect(emptyComponent).toBeDefined();
  });

  test("It should correctly render the list of elements", () => {
    const listMoves = element(itemsTest);
    const text = itemsTest[1].product;
    const counterText = listMoves.getByText(text);
    expect(counterText).toHaveTextContent(text);
  });

  test("The background should be in one color", () => {
    const listMoves = element(itemsTest);
    const counterText = listMoves.getByTestId("flatList-moves");
    expect(counterText).toHaveStyle({ backgroundColor: colors.light });
  });
});
