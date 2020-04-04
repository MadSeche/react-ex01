import React from "react";
import { Router } from "@reach/router";
import BookContextProvider from "./context/bookContext";

import ReadingList from "./components/reading-list/ReadingList";
import BookDetails from "./components/reading-list/BookDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Router>
          <ReadingList path="/" />
          <BookDetails path="/books/:bookId" />
        </Router>
      </BookContextProvider>
    </div>
  );
}

export default App;
