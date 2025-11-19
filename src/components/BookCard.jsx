import './BookCard.css';

function BookCard({ title, author, genre, year, description }) {
    return (
        <div className="book-card">
            <h3 className="book-title">{title}</h3>
            <p className="book-author">by {author}</p>
            <div className="book-details">
                <span className="book-genre">{genre}</span>
                <span className="book-year">{year}</span>
            </div>
            <p className="book-description">{description}</p>
        </div>
    );
}

export default BookCard;