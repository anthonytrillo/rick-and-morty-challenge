import styles from "./FilterBar.module.css";
import { useFilters } from "@/modules/characters/hooks/useFilters";
import { useLanguage } from "@/hooks/useLanguage";

const FilterBar = () => {
  const { filters, setFilter } = useFilters();
  const { t } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setFilter(e.target.name as keyof typeof filters, e.target.value);
  };

  return (
    <section className={styles.filtersSection}>
      <div className={styles.filterSearch}>
        <input
          type="text"
          name="name"
          placeholder={t("searchByName")}
          value={filters.name}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.filters}>
        <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
        >
          <option value="">{t("status")}</option>
          <option value="Alive">{t("alive")}</option>
          <option value="Dead">{t("dead")}</option>
          <option value="Unknown">{t("unknown")}</option>
        </select>

        <select
          name="species"
          value={filters.species}
          onChange={handleInputChange}
        >
          <option value="">{t("species")}</option>
          <option value="Human">{t("human")}</option>
          <option value="Alien">{t("alien")}</option>
          <option value="Animal">{t("animal")}</option>
          <option value="Robot">{t("robot")}</option>
          <option value="Unknown">{t("unknown")}</option>
        </select>
      </div>
    </section>
  );
};

export default FilterBar;
