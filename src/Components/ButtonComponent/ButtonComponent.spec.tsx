import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import ButtonComponent from "./ButtonComponent";

const MockButtonProps = {
  name: "foo",
  handleModal: jest.fn(),
};

describe("ButtonComponent", () => {
  test("button renders", () => {
    // Arrange
    render(<ButtonComponent {...MockButtonProps} />);
    // Act
    const buttonText = screen.getByRole("button");

    //Assert
    expect(buttonText).toBeInTheDocument();
    expect(buttonText.textContent).toBe("foo");
  });
  test("button clicked", async () => {
    // Arrange
    render(<ButtonComponent {...MockButtonProps} />);
    // Act
    const buttonText = screen.getByRole("button");
    await userEvent.click(buttonText);

    //Assert
    expect(MockButtonProps.handleModal).toBeCalledTimes(1);
  });
});
