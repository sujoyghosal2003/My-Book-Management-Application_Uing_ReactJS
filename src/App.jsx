import BookList from "./components/BookList";
import { Books } from "./utils/mockData";
import "./components/Style.css";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = () => {
    console.log("Search Text:", searchText); 

    const filterBooks = Books.filter((book) =>
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.id.toString().includes(searchText) ||
      book.author.toLowerCase().includes(searchText.toLowerCase()) ||
      book.pages.toString().includes(searchText) ||
      book.description.toLowerCase().includes(searchText.toLowerCase()) 
    );

    console.log("Filtered Books:", filterBooks); 

    if (filterBooks.length === 0) {
      setErrorMessage("Please search correctly."); 
    } else {
      setErrorMessage(""); 
    }

    setFilteredBooks(filterBooks); 
  };

  return (
    <>
      <h1 className="heading">
        WELCOME TO{" "}
        <a href="https://www.linkedin.com/in/sujoy-ghosal-739928222/?originalSubdomain=in">
          SUJOY'S
        </a>{" "}
        BOOK MANAGEMENT APPLICATION
      </h1>

      <div className="search">
        <input
          type="text"
          className="search-input"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Books here" 
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <BookList BooksData={filteredBooks} />
    </>
  );
}

export default App;
