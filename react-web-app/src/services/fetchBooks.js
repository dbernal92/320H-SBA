export async function fetchBooks(searchQuery) {
    try {
        if (!searchQuery) return [];

        const query = searchQuery.trim().replace(/\s+/g, "+");
        const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);

        if (!response.ok) {
            throw new Error("Could not find resource!");
        }

        const data = await response.json();
        return data.docs.slice(0, 15); // Return first 15 results
    } catch (error) {
        console.error(error);
        return [];
    }
}
