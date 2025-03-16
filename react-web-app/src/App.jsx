import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './App.css';

function App() {
    const [searchResults, setSearchResults] = useState([]); // Stores search results
    const [darkMode, setDarkMode] = useState(false); // Tracks Dark Mode

    // Function to toggle Dark Mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Apply dark mode class to <body> when darkMode state changes
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [darkMode]);

    return (
        <>
            {/* Pass both `setSearchResults` and `toggleDarkMode` to NavBar */}
            <NavBar setSearchResults={setSearchResults} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      
            {/* TBR Sections */}
            <div className='content-container' id='tbr'>
                <Content title="Want to Read" />
                <Content title="Currently Reading" />
                <Content title="Completed Reads" />
            </div>

            {/* Search Results Section - Passes searchResults */}
            <div className="resultsContainer" id="results">
                <Content title="Results" searchResults={searchResults} />
            </div>

            {/* Picks for You Section */}
            <div className='content-container'>
                <Content title="Picks for You" />
            </div>

            <Footer />
        </>
    );
}

export default App;
