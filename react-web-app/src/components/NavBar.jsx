import { useState } from "react";
import { fetchBooks } from "../services/fetchBooks";

const NavBar = ({ setSearchResults, toggleDarkMode, darkMode }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = async () => {
        const results = await fetchBooks(searchQuery);
        setSearchResults(results);
    };

    return (
        <nav>
            {/* Search Bar */}
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find your next read..."
            />
            <button onClick={handleSearch}>Search</button>

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode}>
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
        </nav>
    );
};

export default NavBar;
