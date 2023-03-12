import React from "react";
import { render, RenderAPI } from "@testing-library/react-native";
import Picture from "../../src/components/Picture";

describe("Picture", () => {
  const element = (url: string): RenderAPI => {
    const picture = render(<Picture url={url} width={55} />);
    return picture;
  };

  test("should render Image component when the url is valid", () => {
    const url = "https://loremflickr.com/640/480/transport";
    const picture = element(url);
    picture.getByTestId("picture");
  });
});
