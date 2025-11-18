import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FavoritesProvider } from '@/modules/favorites/context/FavoritesContext';
import { FilterProvider } from '@/modules/characters/context/FilterContext.tsx';
import { LanguageProvider } from './context/LanguageContext';
import App from '@/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename="/rick-and-morty-challenge">
        <FilterProvider>
          <FavoritesProvider>
            <App />
            <ToastContainer />
          </FavoritesProvider>
        </FilterProvider>
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)