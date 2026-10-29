import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const ICON_SIZE = { fontSize: 16 };

/**
 * Selector individual del panel de filtros.
 * Es un componente controlado: el valor y el cambio los maneja el padre.
 */
function FilterSelect({ id, label, placeholder, icon: Icon, options, value, onChange }) {
  const isActive = value !== "";

  return (
    <div className="relative w-full sm:w-auto sm:min-w-[160px]">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      <Icon
        sx={ICON_SIZE}
        className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${
          isActive ? "text-[var(--filter-text-active)]" : "text-[var(--color-text-muted)]"
        }`}
      />

      <select
        id={id}
        name={id}
        value={value}
        onChange={(event) => onChange(id, event.target.value)}
        className={`w-full cursor-pointer appearance-none rounded-[var(--radius-default)] border py-1.5 pl-9 pr-8 text-[length:var(--font-size-label-sm)] font-[var(--font-weight-medium)] transition-colors duration-150 focus:outline-none focus:border-[var(--color-border-focus)] focus:shadow-[var(--shadow-focus)] ${
          isActive
            ? "border-[var(--filter-border-active)] bg-[var(--filter-bg-active)] text-[var(--filter-text-active)]"
            : "border-transparent bg-[var(--color-surface-subtle)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)]"
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <KeyboardArrowDownRoundedIcon
        sx={ICON_SIZE}
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
      />
    </div>
  );
}

export default FilterSelect;