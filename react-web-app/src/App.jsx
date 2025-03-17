import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import useBookStorage from "./hooks/useBookStorage";
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const { wantToRead, setWantToRead, currentlyReading, setCurrentlyReading, completedReads, setCompletedReads } = useBookStorage();
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
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
      {/* Pass `setSearchResults` and `toggleDarkMode` to NavBar */}
      <NavBar setSearchResults={setSearchResults} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* TBR Sections */}
      <div className="content-container" id="tbr">
        <Content title="Want to Read" books={wantToRead} setBooks={setWantToRead} />
        <Content title="Currently Reading" books={currentlyReading} setBooks={setCurrentlyReading} />
        <Content title="Completed Reads" books={completedReads} setBooks={setCompletedReads} />
      </div>

      {/* Search Results Section */}
      <div className="resultsContainer">
        <Content 
            title="Results" 
            searchResults={searchResults} 
            setWantToRead={setWantToRead}
            setCurrentlyReading={setCurrentlyReading}
            setCompletedReads={setCompletedReads}
        />
      </div>

      {/* Picks for You Section */}
      <div className="content-container">
        <Content title="Picks for You" />
      </div>

      <Footer />
    </>
  );
}

export default App;
