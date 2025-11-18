import { screen, fireEvent } from "@testing-library/react";
import FilterBar from "../components/FilterBar";
import { useFilters } from "../hooks/useFilters";
import renderWithContexts from "@/tests/helpers/RenderWithContexts";

jest.mock("../hooks/useFilters");

describe("Componente FilterBar", () => {
  const mockSetFilter = jest.fn();
  const mockFilters = {
    name: "",
    status: "",
    species: "",
  };

  beforeEach(() => {
    (useFilters as jest.Mock).mockReturnValue({
      filters: mockFilters,
      setFilter: mockSetFilter,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Muestra los campos input y select", () => {
    renderWithContexts(<FilterBar />);

    // Verifica que los campos de filtro se renderizan correctamente
    expect(screen.getByPlaceholderText(/Search by name/i)).toBeInTheDocument();
    expect(screen.getByText(/status/i)).toBeInTheDocument();
    expect(screen.getByText(/species/i)).toBeInTheDocument();
  });

  test("Llama a setFilter cuando cambia el nombre de la entrada", () => {
    renderWithContexts(<FilterBar />);

    const nameInput = screen.getByPlaceholderText(/Search by name/i);

    // Simula cambio en el input de nombre
    fireEvent.change(nameInput, { target: { value: "Rick" } });

    // Verifica que `setFilter` se llama con los argumentos correctos
    expect(mockSetFilter).toHaveBeenCalledWith("name", "Rick");
  });

  test("Llama a setFilter cuando cambia el select de estados", () => {
    renderWithContexts(<FilterBar />);

    const statusSelect = screen.getByText(/status/i).closest("select");

    // Simula selección de opción en el campo `status`
    fireEvent.change(statusSelect!, { target: { value: "Alive" } });

    // Verifica que `setFilter` se llama con los argumentos correctos
    expect(mockSetFilter).toHaveBeenCalledWith("status", "Alive");
  });

  test("Llama a setFilters cuando cambia el select de especies", () => {
    renderWithContexts(<FilterBar />);

    const speciesSelect = screen.getByText(/species/i).closest("select");

    // Simular selección de opción en el campo `species`
    fireEvent.change(speciesSelect!, { target: { value: "Human" } });

    // Verifica que `setFilter` se llama con los argumentos correctos
    expect(mockSetFilter).toHaveBeenCalledWith("species", "Human");
  });

  test("Muestra los valores iniciales correctos", () => {
    renderWithContexts(<FilterBar />);

    // Verifica que los valores iniciales sean los definidos en `mockFilters`
    expect(screen.getByPlaceholderText(/Search by name/i)).toHaveValue("");
    expect(screen.getByText(/status/i).closest("select")).toHaveValue("");
    expect(screen.getByText(/species/i).closest("select")).toHaveValue("");
  });
});