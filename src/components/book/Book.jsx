import React, { useEffect, useState } from "react";
import Form from "../form/Form";
import Card from "../card/Card";

const Book = () => {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || []
  );
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <>
      <Form setBooks={setBooks} edit={edit} setEdit={setEdit} />
      <Card setBooks={setBooks} books={books} setEdit={setEdit} />
    </>
  );
};

export default Book;
