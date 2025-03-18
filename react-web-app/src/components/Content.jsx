import { useState } from "react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Content = ({
    title,
    books = [],
    setBooks,
    searchResults = [],
    setWantToRead,
    setCurrentlyReading,
    setCompletedReads
}) => {
    // Toggle bookshelves
    const isToggleable = ["Want to Read", "Currently Reading", "Completed Reads"].includes(title);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (isToggleable) {
            setIsVisible((prev) => !prev);
        }
    };

    // Function to add a book to a selected list
    const addBook = (book, category) => {
        console.log(`Adding book to ${category}:`, book);

        if (category === "Want to Read" && setWantToRead) {
            setWantToRead((prev) => [...prev, book]);
        } else if (category === "Currently Reading" && setCurrentlyReading) {
            setCurrentlyReading((prev) => [...prev, book]);
        } else if (category === "Completed Reads" && setCompletedReads) {
            setCompletedReads((prev) => [...prev, book]);
        }
    };

    // Function to remove a book from a list
    const removeBook = (bookKey) => {
        if (setBooks) {
            setBooks((prevBooks) => prevBooks.filter((b) => b.key !== bookKey));
        }
    };

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: books.length >= 1 ? 1 : books.length,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="content-section" id="results">
            {(title !== "Results" || searchResults.length > 0) && (
                <h2 onClick={toggleVisibility} style={{ cursor: isToggleable ? "pointer" : "default" }}>
                    {title} {isToggleable && (isVisible ? "▼" : "▶")}
                </h2>
            )}

            {(isVisible && title !== "Results" && books.length > 0) && (
                <div className="results-grid">
                    <Slider {...sliderSettings}>
                        {books.map((book) => (
                            <div key={book.key} className="book-card" id="bookshelf">
                                <img
                                    src={book.cover_i
                                        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                                        : "https://placehold.co/200x300"
                                    }
                                    alt={book.title}
                                />
                                <h3>{book.title || "Untitled"}</h3>
                                <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
                                <button onClick={() => removeBook(book.key)}>Remove</button>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}


            {/* Search Results Section */}
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

                            {/* Buttons to add books to different sections */}
                            <button onClick={() => addBook(book, "Want to Read")}>Want to Read</button>
                            <button onClick={() => addBook(book, "Currently Reading")}>Currently Reading</button>
                            <button onClick={() => addBook(book, "Completed Reads")}>Completed</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Content;