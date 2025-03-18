import { useState } from "react";
import { fetchBooks } from "../services/fetchBooks";
import Button from "./Button";

const NavBar = ({ setSearchResults, toggleDarkMode, darkMode }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = async (e) => {
        if (e) e.preventDefault(); // Prevent the page from refreshing

        if (!searchQuery.trim()) return; // Avoid empty searches

        const results = await fetchBooks(searchQuery);
        setSearchResults(results);
    };

    return (
        <nav className="nav-container">
            {/* Wrap input and button in a form */}
            <form onSubmit={handleSearch} className="search-box">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Find your next read..."
                />
                <Button name="Now!" onClick={handleSearch} type="submit" />
            </form>

            {/* Dark Mode Toggle */}
            <Button 
                name={darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"} 
                onClick={toggleDarkMode} 
                className="dark-mode-toggle" 
            />
        </nav>
    );
};

export default NavBar;
