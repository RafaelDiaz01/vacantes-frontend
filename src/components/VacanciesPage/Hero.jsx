import JobSearchBar from "../VacanciesPage/JobSearchBar.jsx";

/**
 * Displays the homepage hero content and forwards search submissions.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.onSearch - Callback invoked with the submitted search term.
 */
function Hero({ onSearch }) {
    return (
        <section
            aria-labelledby="hero-title"
            className="
                relative isolate overflow-hidden
                px-[var(--layout-margin)]
                py-8 sm:py-10 lg:py-12
            "
        >
            <div
                aria-hidden="true"
                className="
                    pointer-events-none absolute inset-0 -z-10
                    bg-gradient-to-br
                    from-[var(--color-primary-subtle)]
                    via-[var(--color-background)]
                    to-[var(--color-surface-container,theme(colors.white))]
                    opacity-70
                "
            />

            <div className="mx-auto flex w-full flex-col gap-4 sm:gap-5">
                <h1
                    id="hero-title"
                    className="
                        max-w-3xl
                        text-[length:var(--font-size-display-lg)]
                        font-extrabold
                        leading-[var(--line-height-display-lg)]
                        tracking-[var(--letter-spacing-display-lg)]
                        text-[var(--color-text-primary)]
                        max-sm:text-[2rem]
                        max-sm:leading-[2.5rem]
                    "
                >
                    Encuentra tu próximo salto
                    <br />

                    <span className="text-[var(--color-primary)]">
                        profesional
                    </span>
                    <span aria-hidden="true">.</span>
                </h1>

                <JobSearchBar onSearch={onSearch} />
            </div>
        </section>
    );
}

export default Hero;