const Content = ({ title, searchResults = [] }) => {
    return (
        <div className="content-section">
            {/* If this is the Results section, only show title if results exist */}
            {title === "Results" && searchResults.length > 0 && <h2>{title}</h2>}

            {/* If this is not the Results section, always show title */}
            {title !== "Results" && <h2>{title}</h2>}

            {/* Display search results if they exist */}
            {title === "Results" && searchResults.length > 0 && (
                <div className="results-grid">
                    {searchResults.map((book) => (
                        <div key={book.key} className="book-card">
                            <img 
                                src={book.cover_i 
                                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` 
                                    : "https://placehold.co/200x300"
                                } 
                                alt={book.title}
                            />
                            <h3>{book.title || "Untitled"}</h3>
                            <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Content;
