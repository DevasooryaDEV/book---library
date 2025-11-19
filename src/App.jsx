import { useState } from 'react';
import BookCard from './components/BookCard';
import './App.css';

function App() {

    const [books] = useState([
        {
            id: 1,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: "Fiction",
            year: 1960,
            description: "A gripping story of racial injustice and childhood innocence in the American South. The novel is renowned for its warmth and humor despite dealing with serious issues of rape and racial inequality."
        },
        {
            id: 2,
            title: "1984",
            author: "George Orwell",
            genre: "Dystopian",
            year: 1949,
            description: "A dystopian social science fiction novel that examines the consequences of totalitarianism, mass surveillance, and repressive regimentation of all persons and behaviors within society."
        },
        {
            id: 3,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: "Fiction",
            year: 1925,
            description: "A tragic story of Jay Gatsby's quixotic passion for the beautiful Daisy Buchanan. The novel explores themes of idealism, resistance to change, social upheaval, and excess."
        },
        {
            id: 4,
            title: "Pride and Prejudice",
            author: "Jane Austen",
            genre: "Romance",
            year: 1813,
            description: "A romantic novel of manners that depicts the emotional development of protagonist Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential."
        },
        {
            id: 5,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy",
            year: 1937,
            description: "A fantasy novel that follows the quest of home-loving Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon. Bilbo's journey takes him from light-hearted, rural surroundings into more sinister territory."
        }
    ]);

    const genreCount = books.reduce((acc, book) => {
        acc[book.genre] = (acc[book.genre] || 0) + 1;
        return acc;
    }, {});

    const mostCommonGenre = Object.keys(genreCount).reduce((a, b) => 
        genreCount[a] > genreCount[b] ? a : b
    );

    return (
        <div className="app">
         
            <header className="header">
                <h1>My Book Collection</h1>
                <p className="subtitle">Books That Changed My Perspective</p>
            </header>

   
            <section className="summary">
                <h2>Collection Summary</h2>
                <p>Total Books: <strong>{books.length}</strong></p>
                <p>Most Common Genre: <strong>{mostCommonGenre}</strong></p>
            </section>

       
            <section className="books-container">
                <h2>My Books</h2>
                <div className="books-grid">
                    {books.map(book => (
                        <BookCard
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            genre={book.genre}
                            year={book.year}
                            description={book.description}
                        />
                    ))}
                </div>
            </section>


            <footer className="footer">
                <p>Created by Your Name</p>
                <p>contact@example.com</p>
                <p>© 2025 Book Lover</p>
            </footer>
        </div>
    );
}

export default App;