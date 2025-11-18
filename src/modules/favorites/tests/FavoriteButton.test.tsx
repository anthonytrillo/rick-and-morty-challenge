import { screen, fireEvent } from "@testing-library/react";
import FavoriteButton from "../components/FavoriteButton";
import { useFavorites } from "../hooks/useFavorites";
import { useToast } from "../../../hooks/useToast";
import renderWithContexts from "@/tests/helpers/RenderWithContexts";
import { mockCharacter } from "@/tests/mocks/mocks";

jest.mock("../hooks/useFavorites");
jest.mock("../../../hooks/useToast");

describe("Componente FavoriteButton", () => {
  const mockDispatch = jest.fn();
  const mockNotifySuccess = jest.fn();
  const mockNotifyInfo = jest.fn();

  beforeEach(() => {
    (useFavorites as jest.Mock).mockReturnValue({
      state: { favorites: [] },
      dispatch: mockDispatch,
    });

    (useToast as jest.Mock).mockReturnValue({
      notifySuccess: mockNotifySuccess,
      notifyInfo: mockNotifyInfo,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Muestra el botón con el texto 'Agregar a favoritos' cuando el personaje no es un favorito", () => {
    renderWithContexts(<FavoriteButton character={mockCharacter} />);

    const button = screen.getByRole("button", { name: /Add to favorites/i });
    expect(button).toBeInTheDocument();
  });

  test("Muestra el botón con el texto 'Eliminar de favoritos' cuando el personaje es un favorito", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      state: { favorites: [mockCharacter] },
      dispatch: mockDispatch,
    });

    renderWithContexts(<FavoriteButton character={mockCharacter} />);

    const button = screen.getByRole("button", { name: /Remove from favorites/i });
    expect(button).toBeInTheDocument();
  });

  test("Llama a dispatch y notifySuccess al añadir a favoritos", () => {
    renderWithContexts(<FavoriteButton character={mockCharacter} />);

    const button = screen.getByRole("button", { name: /Add to favorites/i });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_FAVORITE",
      payload: mockCharacter,
    });
    expect(mockNotifySuccess).toHaveBeenCalledWith("Character added to favorites.");
  });

  test("Llama a dispatch y notifyInfo cuando se elimina de favoritos", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      state: { favorites: [mockCharacter] },
      dispatch: mockDispatch,
    });

    renderWithContexts(<FavoriteButton character={mockCharacter} />);

    const button = screen.getByRole("button", { name: /Remove from favorites/i });
    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "REMOVE_FAVORITE",
      payload: mockCharacter,
    });
    expect(mockNotifyInfo).toHaveBeenCalledWith("Character removed from favorites.");
  });
});