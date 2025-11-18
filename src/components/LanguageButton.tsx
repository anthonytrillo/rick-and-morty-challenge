import { useLanguage } from "@/hooks/useLanguage";
import { Language } from "@/context/LanguageContext";

const LanguageButton = () => {
  const { language, setLanguage } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLanguage(e.target.value as Language);
  };

  return (
    <select value={language} onChange={handleChange}>
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="pt">PT</option>
    </select>
  );
};

export default LanguageButton;