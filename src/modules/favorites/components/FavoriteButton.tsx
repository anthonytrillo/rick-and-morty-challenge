import { useFavorites } from "@/modules/favorites/hooks/useFavorites";
import { ICharacter } from "@/interfases/character";
import styles from "./FavoriteButton.module.css";
import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/hooks/useLanguage";

const FavoriteButton = ({ character }: { character: ICharacter }) => {
  const { state, dispatch } = useFavorites();
  const { notifySuccess, notifyInfo } = useToast();
  const { t } = useLanguage();

  const addToFavorites = () => {
    dispatch({ type: "ADD_FAVORITE", payload: character });
    notifySuccess(t("addFavorites"));
  };

  const removeFromFavorites = () => {
    dispatch({ type: "REMOVE_FAVORITE", payload: character });
    notifyInfo(t("removeFavorites"));
  };

  const isFavorite = state.favorites.some((fav) => fav.id === character.id);

  return (
    <button
      className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
      onClick={isFavorite ? removeFromFavorites : addToFavorites}
    >
      {isFavorite ? t("removeFavoriteLabel") : t("addFavoriteLabel")}
    </button>
  );
};

export default FavoriteButton;