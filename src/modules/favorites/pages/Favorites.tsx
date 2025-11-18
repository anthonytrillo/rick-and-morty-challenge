import { Link } from "react-router-dom";
import { useFavorites } from "@/modules/favorites/hooks/useFavorites";
import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/hooks/useLanguage";
import { ICharacter } from "@/interfases/character";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { state, dispatch } = useFavorites();
  const { notifyInfo } = useToast();
  const { t } = useLanguage();

  const removeIcon = '\u2716';

  const removeFromFavorites = (character: ICharacter) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: character });
    notifyInfo(t("removeFavorites"));
  };

  if (state.favorites.length === 0) {
    return <p>{t("favoriteErrorMessage")}</p>;
  }

  return (
    <section className={styles.favoritesContainer}>
      <h2>{t("favoriteCharactersTitle")}</h2>
      <div className={styles.favoritesGrid}>
        {state.favorites.map((character) => (
          <div key={character.id} className={styles.favoriteItem}>
            <Link to={`/character/${character.id}`}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </Link>
            <button
              className={styles.removeFavoriteBtn}
              onClick={() => removeFromFavorites(character)}
            >
              {removeIcon}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Favorites;