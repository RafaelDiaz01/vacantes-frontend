import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";

/**
 * Shared application layout.
 *
 * Renders the navigation bar above the current route content.
 */
function MainLayout() {
    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
