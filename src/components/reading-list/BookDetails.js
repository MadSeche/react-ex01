import React, { useContext } from "react";
import { bookContext } from "../../context/bookContext";
import { Link, useParams } from "@reach/router";
const BookDetails = () => {
  //! usParams() renvoie l'object :bookId ::<BookDetails path="/books/:bookId" /> compris dans l'url.
  const params = useParams();
  const { books, deleteBook } = useContext(bookContext);
  const book = books.find(({ id }) => id.toString() === params.bookId);
  console.log(params);

  const handleDelete = () => {
    console.log(book.id);
    return deleteBook(book.id);
  };
  return (
    <div className="wrapper">
      <h1>Book details : </h1>
      <h2>{book.title}</h2>
      <p>author : {book.author}</p>
      <button onClick={handleDelete}>delete book</button>
      <Link to="/">back to list</Link>
    </div>
  );
};

export default BookDetails;
