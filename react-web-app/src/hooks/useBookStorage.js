import { useState, useEffect } from "react";

// Custom hook to manage book lists with localStorage
const useBookStorage = () => {
    const getStoredBooks = (key) => JSON.parse(localStorage.getItem(key)) || [];

    const [wantToRead, setWantToRead] = useState(() => getStoredBooks("wantToRead"));
    const [currentlyReading, setCurrentlyReading] = useState(() => getStoredBooks("currentlyReading"));
    const [completedReads, setCompletedReads] = useState(() => getStoredBooks("completedReads"));

    // Save book lists to localStorage when they change
    useEffect(() => {
        localStorage.setItem("wantToRead", JSON.stringify(wantToRead));
    }, [wantToRead]);

    useEffect(() => {
        localStorage.setItem("currentlyReading", JSON.stringify(currentlyReading));
    }, [currentlyReading]);

    useEffect(() => {
        localStorage.setItem("completedReads", JSON.stringify(completedReads));
    }, [completedReads]);

    return {
        wantToRead, setWantToRead,
        currentlyReading, setCurrentlyReading,
        completedReads, setCompletedReads
    };
};

export default useBookStorage;
