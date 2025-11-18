import { screen } from '@testing-library/react';
import App from '../App';
import renderWithContexts from './helpers/RenderWithContexts';

describe('Componente App', () => {
  it('Muestra la página NotFound para una ruta no definida', () => {
    renderWithContexts(<App />, { memoryRouterProps: { initialEntries: ["/undefined-route"] } });

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});