import React, { useRef, useContext } from "react";
import { bookContext } from "../../context/bookContext";

const BookForm = () => {
  const { addBook } = useContext(bookContext);
  const titleRef = useRef();
  const authorRef = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    addBook(title, author);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new Book</h1>
      <input type="text" placeholder="book title" ref={titleRef} required />
      <input type="text" placeholder="book author" ref={authorRef} required />
      <input type="submit" value="add new book" />
    </form>
  );
};

export default BookForm;
