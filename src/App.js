// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./component/header";
import ResultsGrid from "./component/resultsGrid";
import { fetchBooks } from "./api";
import "./styles/app.css";
// import backgroundImage from "./asset/book_wallpaper.jpg"

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (title) => {
    setLoading(true);
    const results = await fetchBooks(title);
    setBooks(results);
    setLoading(false);
  };

  useEffect(() => {
    setBooks([]);
  }, []);

  return (
    <div className="App" >
      <Header onSearch={handleSearch} />
      <ResultsGrid books={books} loading={loading} />
    </div>
  );
}

export default App;
