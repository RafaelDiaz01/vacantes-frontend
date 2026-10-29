import { NavLink } from "react-router-dom";

/**
 * Main navigation bar for the VacantesApp application.
 *
 * Provides navigation links for job searching and vacancy management,
 * along with an administrator badge and a login button.
 */
function Navbar() {
    // Define navigation links and their corresponding routes.
    const navigationLinks = [
        {
            label: "Buscar Empleo",
            to: "/empleos",
            end: true,
        },
        {
            label: "Gestionar Vacantes",
            to: "/admin/vacantes",
            end: false,
        },
    ];

    /**
     * Returns the appropriate classes for each navigation link.
     *
     * @param {Object} options - NavLink state options.
     * @param {boolean} options.isActive - Whether the route is active.
     * @returns {string} Tailwind CSS classes.
     */
    const getNavigationLinkClasses = ({ isActive }) =>
        [
            "inline-flex items-center whitespace-nowrap",
            "rounded-md px-2 py-2",
            "text-xs font-medium",
            "transition-colors duration-200",
            "focus-visible:outline-2",
            "focus-visible:outline-offset-2",
            "focus-visible:outline-[var(--color-primary)]",
            isActive
                ? "text-[var(--color-primary)]"
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-primary-subtle)] hover:text-[var(--color-primary)]",
        ].join(" ");

    return (
        <header className="sticky top-0 z-[var(--z-index-sticky)] w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]">
            <nav
                aria-label="Main navigation"
                className="
                    mx-auto flex min-h-[80px] w-full
                    items-center justify-between gap-4
                    px-4 sm:px-6 lg:px-10
                "
            >
                {/* Brand and primary navigation links */}
                <div className="flex min-w-0 items-center gap-4 sm:gap-10">
                    {/* Application brand */}
                    <NavLink
                        to="/"
                        aria-label="VacantesApp home"
                        className="
                            shrink-0 rounded-sm
                            text-xl font-extrabold tracking-tight
                            text-[var(--color-text-primary)]
                            transition-opacity hover:text-[var(--color-primary)]
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-[var(--color-primary)]
                        "
                    >
                        VacantesApp
                    </NavLink>

                    {/* Navigation links */}
                    <div className="flex items-center gap-1 sm:gap-2">
                        {navigationLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.end}
                                className={getNavigationLinkClasses}
                            >
                                <span>{link.label}</span>

                                {/* Display the administrator badge next to vacancy management */}
                                {link.to === "/admin/vacantes" && (
                                    <span
                                        className="
                                            ml-2 inline-flex items-center
                                            rounded-sm
                                            bg-[var(--color-primary-subtle)]
                                            px-1 py-0.5
                                            text-[9px] font-bold uppercase
                                            leading-3
                                            text-[var(--color-primary-hover)]
                                        "
                                    >
                                        Admin
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Authentication actions */}
                <div className="flex shrink-0 items-center">
                    <NavLink
                        to="/login"
                        className="
                            inline-flex min-h-9 items-center justify-center
                            rounded-[var(--radius-button)]
                            bg-[var(--button-primary-bg)]
                            px-3 py-2
                            text-xs font-semibold
                            text-[var(--button-primary-text)]
                            transition-colors duration-200
                            hover:bg-[var(--button-primary-hover)]
                            focus-visible:outline-2
                            focus-visible:outline-offset-2
                            focus-visible:outline-[var(--color-primary)]
                        "
                    >
                        Iniciar sesión
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
