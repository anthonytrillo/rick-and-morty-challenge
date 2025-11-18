import { screen } from "@testing-library/react";
import CharacterCard from "../components/CharacterCard";
import renderWithContexts from "@/tests/helpers/RenderWithContexts";
import { mockCharacter } from "@/tests/mocks/mocks";

describe("Componente CharacterCard", () => {
  test("Muestra la card de cada personaje correctamente", () => {
    renderWithContexts(<CharacterCard character={mockCharacter} />);

    expect(screen.getByText(/Alan Rails/i)).toBeInTheDocument();
    expect(screen.getByText(/Dead/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Alan Rails/i)).toHaveAttribute("src", "https://rickandmortyapi.com/api/character/avatar/10.jpeg");
  });
});