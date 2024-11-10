import React from "react";
import "./../styles/bookCard.css";

function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/128x190?text=No+Cover";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={book.title} className="book-cover" />
      <div className="book-info">
        <h2>{book.title}</h2>
        <p>by {book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
      </div>
    </div>
  );
}

export default BookCard;
