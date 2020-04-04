import React, { useContext } from "react";
import { bookContext } from "../../context/bookContext";
import { Link } from "@reach/router";
import BookForm from "./BookForm";

const ReadingList = props => {
  const { books } = useContext(bookContext);
  console.log(books);

  return (
    <div className="ReadingList wrapper">
      <h1>Reading List</h1>
      <ul>
        {books.map(book => (
          <Link to={`books/${book.id}`} key={book.id}>
            <li>{book.title}</li>
          </Link>
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default ReadingList;
