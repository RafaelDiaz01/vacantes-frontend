import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Pagination() {
  return (
    <div className="flex justify-between items-center pt-4 px-4 sm:px-6 lg:px-[var(--layout-margin)]">
      <button className="text-[var(--color-text-muted)] text-[var(--font-size-label-md)] font-medium hover:text-[var(--color-text-primary)] transition-colors cursor-not-allowed opacity-50 flex items-center gap-1">
        <ArrowBackIcon sx={{ fontSize: 16 }} /> Anterior
      </button>
      
      <div className="flex items-center gap-1">
        <button className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-default)] bg-[var(--color-primary)] text-white text-[var(--font-size-label-md)] font-semibold shadow-sm">1</button>
        <button className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-default)] text-[var(--color-text-secondary)] text-[var(--font-size-label-md)] font-medium hover:bg-[var(--color-surface-subtle)] transition-colors">2</button>
        <button className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-default)] text-[var(--color-text-secondary)] text-[var(--font-size-label-md)] font-medium hover:bg-[var(--color-surface-subtle)] transition-colors">3</button>
        <span className="px-1 text-[var(--color-text-muted)]">...</span>
        <button className="w-9 h-9 flex items-center justify-center rounded-[var(--radius-default)] text-[var(--color-text-secondary)] text-[var(--font-size-label-md)] font-medium hover:bg-[var(--color-surface-subtle)] transition-colors">15</button>
      </div>

      <button className="text-[var(--color-primary)] text-[var(--font-size-label-md)] font-medium hover:text-[var(--color-primary-hover)] transition-colors flex items-center gap-1">
        Siguiente <ArrowForwardIcon sx={{ fontSize: 16 }} />
      </button>
    </div>
  );
}