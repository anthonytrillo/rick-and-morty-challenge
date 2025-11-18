import { screen } from "@testing-library/react";
import Header from "../Header";
import renderWithContexts from "@/tests/helpers/RenderWithContexts";

describe("Componente Header", () => {
  test("Devuelve el título principal con el nombre correcto", () => {
    renderWithContexts(<Header />);

    // Verifica que el título principal este presente
    const titleElement = screen.getByRole("heading", { level: 1, name: /rick and morty/i });
    expect(titleElement).toBeInTheDocument();

    // Verifica que el enlace al inicio este presente
    const homeLink = screen.getByRole("link", { name: /rick and morty/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  test("Devuelve el enlace a favoritos", () => {
    renderWithContexts(<Header />);

    // Verifica que el enlace a favoritos este presente
    const favoritesLink = screen.getByRole("link", { name: /favorites/i });
    expect(favoritesLink).toBeInTheDocument();
    expect(favoritesLink).toHaveAttribute("href", "/favorites");
  });
});
