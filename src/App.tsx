import { Routes, Route, useLocation } from 'react-router-dom';
import Characters from '@/modules/characters/pages/Characters';
import CharacterDetails from '@/modules/characters/pages/CharacterDetails';
import Favorites from '@/modules/favorites/pages/Favorites';
import NotFound from '@/components/NotFound';
import Header from '@/components/Header';
import FilterBar from '@/modules/characters/components/FilterBar';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === '/' && <FilterBar />}
      <Routes>
        <Route path='/' element={<Characters />} />
        <Route path='/character/:id' element={<CharacterDetails />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
