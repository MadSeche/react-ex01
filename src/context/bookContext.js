import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { navigate } from "@reach/router";

export const bookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Doom ", author: "id Software", id: 1 },
    { title: "Doom 2", author: "id Software", id: 2 },
    { title: "Doom  3", author: "id Software", id: 3 }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  const deleteBook = id => {
    const newBooks = [...books];
    const newUpdatedBooks = newBooks.filter(book => book.id !== id);
    console.log("newUpdatedBook", newUpdatedBooks);
    setBooks(newUpdatedBooks);
    navigate("/");
    // setBooks(books.filter(book => book.id !== id));
  };
  return (
    <bookContext.Provider value={{ books, addBook, deleteBook }}>
      {props.children}
    </bookContext.Provider>
  );
};
export default BookContextProvider;
