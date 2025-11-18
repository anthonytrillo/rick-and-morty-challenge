import { Link } from "react-router-dom";
import { ICharacter } from "@/interfases/character";
import { useLanguage } from "@/hooks/useLanguage";
import styles from "./CharacterCard.module.css";
import FavoriteButton from "@/modules/favorites/components/FavoriteButton";

const CharacterCard = ({ character }: { character: ICharacter }) => {
  const { t } = useLanguage();

  return (
    <article key={character.id} className={styles.charactersItem}>
      <Link to={`/character/${character.id}`}>
        <img src={character?.image} alt={character.name} />
        <h2>{t("name")}: {character.name}</h2>
        <h2>{t("status")}: {character.status}</h2>
        <h2>{t("species")}: {character.species}</h2>
      </Link>
      <FavoriteButton character={character}/>
    </article>
  );
};

export default CharacterCard;