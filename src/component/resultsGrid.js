// src/components/ResultsGrid.js
import React from "react";
import BookCard from "./bookCard";
import "./../styles/resultsGrid.css";

function ResultsGrid({ books, loading }) {
    if (loading) return <p className="loading">Loading...</p>;

    return (
        <>
            {
                books.length ?
                    <div className="results-grid">
                        {books.length ? (
                            books.map((book) => <BookCard key={book.key} book={book} />)
                        ) : (
                            <div className="no-results">
                                <p>No results found</p>
                            </div>
                        )}
                    </div> :
                    <div>
                        <p className="motivational-quote">
                            "Don't give up! There are millions of books waiting to be discovered."
                        </p>

                        <p className="book">
                            Search Your Book...
                        </p>
                    </div>
            }
        </>
    );
}

export default ResultsGrid;
