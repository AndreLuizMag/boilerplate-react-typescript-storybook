import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Button from "./Button";

export const buttonTestID = "button";

describe("Button", () => {
  it("Should be able to render the button", () => {
    const { getByTestId } = render(<Button label="Click button" />);
    expect(getByTestId(buttonTestID)).toBeInTheDocument();
  });
});
