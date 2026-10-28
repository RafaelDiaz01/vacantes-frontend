import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
/**
 * Reusable job search component.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.placeholder - Input placeholder text.
 * @param {string} props.buttonText - Search button label.
 * @param {string} props.initialValue - Initial input value.
 * @param {Function} props.onSearch - Callback executed when the form is submitted.
 * @param {boolean} props.disabled - Whether the search form is disabled.
 */
function JobSearchBar({
    placeholder = "Ej. Frontend Engineer, React, Remoto",
    buttonText = "Buscar Empleos",
    initialValue = "",
    onSearch,
    disabled = false,
}) {
    const [searchTerm, setSearchTerm] = useState(initialValue);

    /**
     * Updates the search term when the input changes.
     */
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    /**
     * Prevents page reload and submits the search term.
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        onSearch?.(searchTerm.trim());
    };

    return (
        <form
            onSubmit={handleSubmit}
            role="search"
            className="
                flex w-full flex-col gap-[var(--spacing-3)]
                rounded-[var(--radius-xl)] border border-[var(--color-border)]
                bg-[var(--color-background)]
                p-[var(--spacing-3)]
                sm:flex-row sm:items-center sm:gap-[var(--spacing-3)]
                sm:p-[var(--input-padding-y)]
            "
        >
            {/* Search input container */}
            <div
                className="
                    flex min-w-0 flex-1 items-center gap-[var(--spacing-component-md)]
                    rounded-[var(--input-radius)] bg-[var(--input-bg)]
                    px-[var(--input-padding-x)] py-[var(--input-padding-y)]
                    transition-colors duration-200
                    focus-within:ring-2
                    focus-within:ring-[var(--input-border-focus)]
                    sm:px-[var(--input-padding-x)] sm:py-[var(--input-padding-y)]
                "
            >
                {/* Search icon */}
                <SearchIcon
                    aria-hidden="true"
                    className="
                        shrink-0
                        !text-[var(--color-primary)]
                    "
                    fontSize="medium"
                />

                {/* Input and label */}
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <label
                        htmlFor="job-search-input"
                        className="
                            cursor-text text-[var(--font-size-label-sm)]
                            font-[var(--font-weight-semibold)] uppercase
                            leading-[var(--line-height-label-sm)]
                            tracking-[var(--letter-spacing-label-sm)]
                            text-[var(--color-text-primary)]
                        "
                    >
                        Cargo, habilidad o keyword
                    </label>

                    <input
                        id="job-search-input"
                        name="search"
                        type="search"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        autoComplete="off"
                        className="
                            w-full min-w-0 border-0 bg-transparent p-0
                            text-[var(--input-font-size)]
                            leading-[var(--line-height-body-md)]
                            text-[var(--input-text)]
                            placeholder:text-[var(--input-placeholder)]
                            outline-none
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    />
                </div>
            </div>

            {/* Search button */}
            <button
                type="submit"
                disabled={disabled}
                className="
                    inline-flex min-h-[var(--button-height-default)] w-full shrink-0
                    items-center justify-center gap-[var(--spacing-component-sm)]
                    rounded-[var(--radius-button)] bg-[var(--button-primary-bg)]
                    px-[var(--button-padding-x)] py-[var(--button-padding-y)]
                    text-[var(--button-font-size)]
                    font-[var(--button-font-weight)]
                    text-[var(--button-primary-text)]
                    transition-colors duration-200
                    hover:bg-[var(--button-primary-hover)]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[var(--input-border-focus)]
                    focus-visible:ring-offset-2
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    sm:w-auto sm:min-w-44
                "
            >
                <span>{buttonText}</span>
            </button>
        </form>
    );
}

export default JobSearchBar;