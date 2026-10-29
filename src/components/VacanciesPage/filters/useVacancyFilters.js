import { useCallback, useMemo, useState } from "react";
import { INITIAL_FILTERS } from "../../../data/filterOptions";
import { filterVacancies } from "./filterVacancies";

export function useVacancyFilters(vacancies) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const setFilter = useCallback((filterId, value) => {
    setFilters((prev) => ({ ...prev, [filterId]: value }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS);
  }, []);

  const filteredVacancies = useMemo(
    () => filterVacancies(vacancies, filters),
    [vacancies, filters]
  );

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  return {
    filters,
    filteredVacancies,
    hasActiveFilters,
    setFilter,
    clearFilters,
  };
}