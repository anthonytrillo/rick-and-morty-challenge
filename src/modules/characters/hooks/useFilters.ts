import { useContext } from "react";
import { FilterContext } from "@/modules/characters/context/FilterContext";
import { IFilterContextProps } from "@/interfases/filters";

export const useFilters = (): IFilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters debe ser usado dentro de un FilterProvider");
  }
  return context;
};