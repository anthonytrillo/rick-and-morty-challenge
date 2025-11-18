import { useEffect, useState } from "react";
import { ICharacter } from "@/interfases/character";

const LOCAL_STORAGE_KEY = "favorites";

export const useLocalStorageFavorites = () => {
  const [favorites, setFavorites] = useState<ICharacter[]>([]);

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (character: ICharacter) => {
    if (!favorites.some((fav) => fav.id === character.id)) {
      setFavorites([...favorites, character]);
    }
  };

  const removeFavorite = (character: ICharacter) => {
    setFavorites(favorites.filter((fav) => fav.id !== character.id));
  };

  const isFavorite = (character: ICharacter) => {
    return favorites.some((fav) => fav.id === character.id);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
