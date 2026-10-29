import { useNavigate } from "react-router-dom";
import Hero from "../components/VacanciesPage/Hero.jsx";

/**
 * Renders the home page and coordinates job search navigation.
 */
function HomePage() {
    const navigate = useNavigate();

    /**
     * Builds the search query and redirects users to the vacancies page.
     *
     * @param {string} searchTerm - The job title, skill, or keyword to search for.
     */
    const handleJobSearch = (searchTerm) => {
        const trimmedSearchTerm = searchTerm.trim();
        const searchParams = new URLSearchParams();

        if (trimmedSearchTerm) {
            searchParams.set("search", trimmedSearchTerm);
        }

        const queryString = searchParams.toString();

        navigate(`/empleos${queryString ? `?${queryString}` : ""}`);
    };

    return (
        <main className="w-full">
            <Hero onSearch={handleJobSearch} />
        </main>
    );
}

export default HomePage;