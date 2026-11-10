import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
/**
 * Renders a job card with the provided information.
 * @param {*} param0 - The job details.
 * @returns {JSX.Element} - The rendered job card.
 */
export default function JobCard({ title, company, location, type, salary }) {
    return (
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-card)] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-[var(--shadow-hover)] transition-shadow">

            {/* Job Info */}
            <div className="flex gap-4 items-start">
                <div>
                    <h3 className="text-[var(--font-size-headline-sm)] font-bold text-[var(--color-text-primary)] mb-1">{title}</h3>
                    <p className="text-[var(--font-size-label-md)] text-[var(--color-text-tertiary)] mb-3">{company}</p>

                    <div className="flex flex-wrap gap-2">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-surface-subtle)] text-[var(--color-text-muted)] rounded-[var(--badge-radius)] text-[var(--badge-font-size)] font-medium">
                            <LocationOnIcon sx={{ fontSize: 12 }} />
                            {location}
                        </span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-surface-subtle)] text-[var(--color-text-muted)] rounded-[var(--badge-radius)] text-[var(--badge-font-size)] font-medium">
                            <BusinessCenterIcon sx={{ fontSize: 12 }} />
                            {type}
                        </span>
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[var(--color-primary-light)] text-[var(--color-primary-hover)] rounded-[var(--badge-radius)] text-[var(--badge-font-size)] font-semibold">
                            <AttachMoneyIcon sx={{ fontSize: 12 }} />
                            {salary}
                        </span>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto shrink-0">
                <button className="flex-1 md:flex-none bg-[var(--color-primary)] text-white px-6 py-2 rounded-[var(--radius-default)] text-[var(--font-size-label-md)] font-semibold hover:bg-[var(--color-primary-hover)] transition-colors">
                    Postularme
                </button>
                <button className="flex-1 md:flex-none bg-[var(--color-surface)] border border-[var(--color-border-strong)] text-[var(--color-text-primary)] px-6 py-2 rounded-[var(--radius-default)] text-[var(--font-size-label-md)] font-semibold hover:bg-[var(--color-surface-hover)] transition-colors">
                    Ver detalles
                </button>
            </div>
        </div>
    );
}