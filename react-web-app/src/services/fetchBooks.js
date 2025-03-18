export async function fetchBooks(searchQuery, page = 1, limit = 10) {
    try {
        if (!searchQuery) return [];

        const query = searchQuery.trim().replace(/\s+/g, "+");
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${query}&page=${page}&limit=${limit}`
        );

        if (!response.ok) {
            throw new Error("Could not find resource!");
        }

        const data = await response.json();
        return data.docs; 
    } catch (error) {
        console.error(error);
        return [];
    }
}
