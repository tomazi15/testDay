import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import ModalComponent from "./ModalComponent";

const MockModalProps = {
  handleModal: jest.fn(),
};

describe("ModalComponent", () => {
  test("modal renders", () => {
    // Arrange
    render(<ModalComponent {...MockModalProps} />);

    // Act
    const modalTitle = screen.getByText(/new day/i);
    const modalBody = screen.getByTestId("modal-body");
    const modalButton = screen.getByRole("button");
    //Assert

    expect(modalTitle).toBeInTheDocument();
    expect(modalTitle.textContent).toBe("New Day");
    expect(modalBody).toBeInTheDocument();
    expect(modalButton).toBeInTheDocument();
  });
  test("button clicked", async () => {
    // Arrange
    render(<ModalComponent {...MockModalProps} />);
    // Act
    const closeModalButton = screen.getByRole("button");
    await userEvent.click(closeModalButton);
    //Assert
    expect(MockModalProps.handleModal).toBeCalledTimes(1);
  });
});
