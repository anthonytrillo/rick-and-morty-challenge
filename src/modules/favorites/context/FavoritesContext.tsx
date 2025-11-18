import { createContext, useReducer, useEffect } from "react";
import { IFavoritesAction, IFavoritesState, IFavoritesProviderProps } from "@/interfases/favorite";

const LOCAL_STORAGE_KEY = "favorites";

const initialState: IFavoritesState = {
  favorites: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"),
};

const favoritesReducer = (state: IFavoritesState, action: IFavoritesAction): IFavoritesState => {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.favorites.some((fav) => fav.id === action.payload.id)) {
        return state; // Evitar duplicados
      }
      return { ...state, favorites: [...state.favorites, action.payload] };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload.id),
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const FavoritesContext = createContext<{
  state: IFavoritesState;
  dispatch: React.Dispatch<IFavoritesAction>;
} | undefined>(undefined);

export const FavoritesProvider = ({ children }: IFavoritesProviderProps) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  // Sincronizar favoritos con localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};


