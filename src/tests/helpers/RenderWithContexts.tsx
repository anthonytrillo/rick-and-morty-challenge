import { render } from "@testing-library/react";
import { LanguageProvider } from "@/context/LanguageContext";
import { FavoritesProvider } from "@/modules/favorites/context/FavoritesContext";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";

interface RenderWithContextsOptions {
  memoryRouterProps?: MemoryRouterProps; // Props específicos para MemoryRouter
  // Si otros providers también necesitan props, agregarlos acá
}

const renderWithContexts = (
  ui: React.ReactElement,
  { memoryRouterProps, ...options }: RenderWithContextsOptions = {}
) => {
  return render(
    <LanguageProvider>
      <FavoritesProvider>
        <MemoryRouter {...memoryRouterProps}>
          {ui}
        </MemoryRouter>
      </FavoritesProvider>
    </LanguageProvider>,
    options
  );
};

export default renderWithContexts;