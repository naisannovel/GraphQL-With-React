import React, { useState } from "react";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";



function App() {

  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <BookList setSelectedBook={setSelectedBook} />
      <AddBook/>
      <br/>
      <br/>
      <br/>
      <br/>
      <BookDetails selectedBook={selectedBook} />
    </>
  );
}

export default App;