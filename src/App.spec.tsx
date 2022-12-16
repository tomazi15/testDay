import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("App renders", async () => {
    // Arrange
    render(<App />);

    // Act
    const openModalButton = screen.getByRole("button");
    //Assert
    expect(openModalButton).toBeInTheDocument();
  });
  test("Modal opens", async () => {
    // Arrange
    render(<App />);
    // Act
    const openModalButton = screen.getByRole("button");
    await userEvent.click(openModalButton);
    const modal = screen.getByRole("dialog");
    //Assert
    expect(modal).toBeInTheDocument();
  });
  test("Modal closes", async () => {
    // Arrange
    render(<App />);
    // Act
    const openModalButton = screen.getByRole("button");
    await userEvent.click(openModalButton);
    const modal = screen.getByRole("dialog");
    const closeModalButton = screen.getByText(/close/i);
    await userEvent.click(closeModalButton);
    //Assert
    expect(modal).not.toBeInTheDocument();
  });
});
