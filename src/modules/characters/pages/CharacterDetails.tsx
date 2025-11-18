import { useCharacterDetails } from "@/modules/characters/hooks/useCharacterDetails";
import { useLanguage } from "@/hooks/useLanguage";
import styles from "./CharacterDetails.module.css";

const CharacterDetails = () => {
  const { character, loading, error } = useCharacterDetails();
  const { t } = useLanguage();

  if (loading) return <p>{t("loading")}</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.charactersInner}>
      <article className={styles.charactersCard}>
        <img src={character?.image} alt={character?.name} />
        <h2>{character?.name}</h2>
      </article>
      <article className={styles.charactersCard}>
        <h3>
        {t("episode")}: <span>{character?.episode.length}</span>
        </h3>
        <h3>
          {t("status")}: <span>{character?.status}</span>
        </h3>
        <h3>
        {t("species")}: <span>{character?.species}</span>
        </h3>
        <h3>
        {t("gender")}: <span>{character?.gender}</span>
        </h3>
        <h3>
        {t("origin")}: <span>{character?.origin.name}</span>
        </h3>
        <h3>{t("location")}: {character?.location.name}</h3>
      </article>
    </div>
  );
};

export default CharacterDetails;