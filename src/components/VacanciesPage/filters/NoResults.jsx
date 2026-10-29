import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";
 
function NoResults({ onClear }) {
  return (
    <div
      role="status"
      className="flex flex-col items-center gap-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-12 text-center"
    >
      <SearchOffRoundedIcon sx={{ fontSize: 40 }} className="text-[var(--color-text-placeholder)]" />
 
      <div className="flex flex-col gap-1">
        <p className="text-[length:var(--font-size-title-md)] font-[var(--font-weight-semibold)] text-[var(--color-text-primary)]">
          No encontramos vacantes con esos filtros
        </p>
        <p className="text-[length:var(--font-size-body-sm)] text-[var(--color-text-muted)]">
          Prueba con otra combinación o quita algunos filtros.
        </p>
      </div>
 
      {onClear && (
        <button
          type="button"
          onClick={onClear}
          className="mt-2 rounded-[var(--radius-button)] border border-[var(--button-secondary-border)] bg-[var(--button-secondary-bg)] px-4 py-2 text-[length:var(--font-size-label-md)] font-[var(--font-weight-semibold)] text-[var(--button-secondary-text)] transition-colors duration-150 hover:bg-[var(--color-surface-subtle)]"
        >
          Limpiar filtros
        </button>
      )}
    </div>
  );
}
 
export default NoResults;
 
