import React, { useState } from "react";
import "./../styles/header.css";

function Header({ onSearch }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(title);
  };

  return (
    <header className="header">
      <h1>Welcome to Book Finder</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for a book..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default Header;
