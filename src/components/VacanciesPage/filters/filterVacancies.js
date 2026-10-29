export function filterVacancies(vacancies, filters) {
  const activeFilters = Object.entries(filters).filter(([, value]) => value !== "");
 
  if (activeFilters.length === 0) {
    return vacancies;
  }
 
  return vacancies.filter((vacancy) =>
    activeFilters.every(([key, value]) => vacancy[key] === value)
  );
}
 
