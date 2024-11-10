export const fetchBooks = async (title) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${title}`);
      const data = await response.json();
      return data.docs; 
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    }
  };
  