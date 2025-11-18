import { screen, fireEvent } from "@testing-library/react";
import Pagination from "../Pagination";
import { IPaginationProps } from "../../interfases/pagination";
import renderWithContexts from "@/tests/helpers/RenderWithContexts";

describe("Componente Pagination", () => {
  const mockOnPageChange = jest.fn();

  const defaultProps: IPaginationProps = {
    currentPage: 1,
    totalPages: 5,
    onPageChange: mockOnPageChange,
  };

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  test("Muestra la información correcta de la página", () => {
    renderWithContexts(<Pagination {...defaultProps} />);

    const pageInfo = screen.getByText(/page 1 of 5/i);
    expect(pageInfo).toBeInTheDocument();
  });

  test("Muestra los botones con el estado inicial correcto", () => {
    renderWithContexts(<Pagination {...defaultProps} />);

    const previousButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(previousButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  test("Llama a onPageChange con el valor correcto cuando se hace click en 'Siguiente'", () => {
    renderWithContexts(<Pagination {...defaultProps} />);

    const nextButton = screen.getByRole("button", { name: /next/i });
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(2); // Current page + 1
  });

  test("Llama a onPageChange con el valor correcto cuando se hace click en 'Anterior'", () => {
    renderWithContexts(<Pagination {...defaultProps} currentPage={3} />);

    const previousButton = screen.getByRole("button", { name: /previous/i });
    fireEvent.click(previousButton);

    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith(2); // Current page - 1
  });

  test("Desactiva el botón 'Siguiente' cuando está en la última página", () => {
    renderWithContexts(<Pagination {...defaultProps} currentPage={5} />);

    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();
  });

  test("Desactiva el botón 'Anterior' cuando está en la primera página", () => {
    renderWithContexts(<Pagination {...defaultProps} currentPage={1} />);

    const previousButton = screen.getByRole("button", { name: /previous/i });
    expect(previousButton).toBeDisabled();
  });

  test("Muestra ambos botones habilitados para las páginas centrales", () => {
    renderWithContexts(<Pagination {...defaultProps} currentPage={3} />);

    const previousButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(previousButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });
});