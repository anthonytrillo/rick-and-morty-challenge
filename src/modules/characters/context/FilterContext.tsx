import { createContext, useState } from "react";
import { IFilterContextProps, IFilterState } from "@/interfases/filters";

export const FilterContext = createContext<IFilterContextProps | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<IFilterState>({
    page: 1,
    name: "",
    status: "",
    species: "",
  });

  const setFilter = (key: keyof IFilterState, value: string | number) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: key === "page" ? (typeof value === 'string' ? parseInt(value, 10) : value) : 1, // Reinicia a la página 1 si cambian los filtros.
    }));
  };

  return (
    <FilterContext.Provider value={{ filters, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};