import React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import { useNavigation } from "@react-navigation/native";
import { DetailsScreenProps } from "../../src/interfaces/Navigation";
import ProductComponent from "../../src/components/Product";
import Data from "../../src/components/Product/Data";

jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe("ProductComponent", () => {
  useNavigation<DetailsScreenProps>();

  let productComponent: RenderAPI;
  const itemsTest = {
    createdAt: "2022-12-09T06:34:25.607Z",
    product: "Handmade Metal Shoes",
    points: 16434,
    image: "https://loremflickr.com/640/480/transport",
    is_redemption: false,
    id: "1",
  };

  beforeEach(() => {
    productComponent = render(<ProductComponent {...itemsTest} />);
  });

  test("Should render correctly", () => {
    expect(productComponent).toBeDefined();
  });

  test("It should correctly display the product name", () => {
    productComponent.getByText(itemsTest.product);
  });

  test("It should correctly display the points", () => {
    const text = `${itemsTest.points}`;
    productComponent.getByText(text, {
      exact: false,
    });
  });

  test("It should correctly display the date", () => {
    render(
      <Data product={itemsTest.product} createdAt={itemsTest.createdAt} />,
    );
  });

  test("Should have a row style", () => {
    const button = productComponent.getByTestId("product-touchable");
    expect(button).toHaveStyle({ flexDirection: "row" });
  });
});
