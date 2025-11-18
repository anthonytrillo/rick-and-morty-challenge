import styles from "./Pagination.module.css";
import { IPaginationProps } from "@/interfases/pagination";
import { useLanguage } from "@/hooks/useLanguage";

const Pagination = ({ currentPage, totalPages, onPageChange }: IPaginationProps) => {
  const { t } = useLanguage();

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        {t("previous")}
      </button>
      <span className={styles.pageInfo}>
      {t("page")} {currentPage} {t("of")} {totalPages}
      </span>
      <button
        className={styles.button}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        {t("next")}
      </button>
    </div>
  );
};

export default Pagination;