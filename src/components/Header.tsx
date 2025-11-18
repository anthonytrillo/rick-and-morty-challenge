import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import LanguageButton from "./LanguageButton";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className={styles.headerMain}>
      <div className={styles.headerTitle}>
        <h1>
          <Link to="/">Rick and Morty</Link>
        </h1>
      </div>
      <div className={styles.headerFavorites}>
        <Link to="/favorites">{t("favorites")}</Link>
      </div>
      <div className={styles.languageSelector}>
        <LanguageButton />
      </div>
    </header>
  );
}

export default Header;