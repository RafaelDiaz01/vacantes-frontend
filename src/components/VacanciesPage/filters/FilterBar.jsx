import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FilterSelect from "./FilterSelect";

const FILTER_FIELDS = [
  {
    id: "location",
    label: "Filtrar por ubicación",
    placeholder: "Todas las ubicaciones",
    icon: LocationOnOutlinedIcon,
  },
  {
    id: "category",
    label: "Filtrar por categoría",
    placeholder: "Todas las categorías",
    icon: CategoryOutlinedIcon,
  },
  {
    id: "employmentType",
    label: "Filtrar por tipo de empleo",
    placeholder: "Todo tipo de empleo",
    icon: WorkOutlineOutlinedIcon,
  },
];

/**
 * Panel de filtros de vacantes: ubicación, categoría y tipo de empleo.
 *
 * Props:
 * - filters:  { location, category, employmentType }
 * - options:  catálogos de opciones para cada filtro
 * - onChange: (filterId, value) => void
 * - onClear:  () => void
 */
function FilterBar({ filters, options, onChange, onClear }) {
  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  return (
    <section
      aria-label="Filtros de vacantes"
      className="flex flex-col gap-3 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {FILTER_FIELDS.map((field) => (
          <FilterSelect
            key={field.id}
            id={field.id}
            label={field.label}
            placeholder={field.placeholder}
            icon={field.icon}
            options={options[field.id]}
            value={filters[field.id]}
            onChange={onChange}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onClear}
        disabled={!hasActiveFilters}
        className="self-end text-[length:var(--font-size-label-sm)] font-[var(--font-weight-semibold)] text-[var(--color-primary)] transition-colors duration-150 hover:text-[var(--color-primary-hover)] hover:underline disabled:cursor-not-allowed disabled:text-[var(--color-text-disabled)] disabled:no-underline sm:self-auto"
      >
        Limpiar todos
      </button>
    </section>
  );
}

export default FilterBar;