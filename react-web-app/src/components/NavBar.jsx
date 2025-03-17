import { useState } from "react";
import { fetchBooks } from "../services/fetchBooks";

const NavBar = ({ setSearchResults, toggleDarkMode, darkMode }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = async () => {
        const results = await fetchBooks(searchQuery);
        setSearchResults(results);
    };

    return (
        <nav className="nav-container">
            {/* Search Bar */}
            <div className="search-box">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Find your next read..."
                />
                <button id="book-search" onClick={handleSearch}>Now!</button>
            </div>

            {/* Dark Mode Toggle */}
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
        </nav>
    );
};

export default NavBar;
