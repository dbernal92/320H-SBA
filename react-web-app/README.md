# Book Tracker App

## Overview

This is a book tracking web application that allows users to search for books, categorize them into different reading lists (Want to Read, Currently Reading, Completed Reads), and toggle between light and dark modes.

## Features

- Search for books using the Open Library API.

- Add books to different reading categories.

- Remove books from lists.

- Dark mode toggle for user preference.

- Book carousel display using Slick Carousel.

## Tech Stack

- React.js (for UI components and state management)

- Open Library API (for fetching book data)

- Slick Carousel (for book displays)

- CSS (for styling and dark mode support)

## Future Enhancements

- Implement pagination for efficient searches.

- Add user authentication for personalized tracking.

- Improve UI/UX with animations and design refinements.

## Component

### App.js

- Manages global state.

- Handles dark mode toggle.

- Renders NavBar, Content sections, and Footer.

### NavBar.js

- Includes a search bar that fetches books from the Open Library API.

- Allows users to toggle between dark and light modes.

### Content.js

- Displays books in different categories.

- Uses Slick Carousel for book visualization.

- Allows users to add or remove books from lists.

### Button.js

- A reusable button component for consistent UI styling.

- Used for search, toggling dark mode, and book list actions.

### fetchBooks.js

- Fetches book data from the Open Library API.

- Limits search results to 15.