import React, { useEffect, useState } from "react";
import axios from "axios";
import { IBook } from "../types/IBook";
import styled from "styled-components";
import { SketchPicker } from "react-color";

function Books() {
  const [allBooks, setallBook] = useState<IBook[]>([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const { data: allBooks } = await axios.get<IBook[]>(
      "http://localhost:8000/api/books/"
    );
    setallBook(allBooks);
  };

  return (
    <div>
      {allBooks.map((book) => (
        <BookDiv>
          <div key={book._id}>
            <img src={book.image} />
            <p>{book.titel}</p>
            <p>{book.genre.name}</p>
            <p>{book.auther.name}</p>
          </div>
        </BookDiv>
      ))}
    </div>
  );
}

export default Books;

const BookDiv = styled.div`
  border: 2px solid black;
  border-radius: 16px;
  height: 200px;
  width: 150px;

  p {
    margin: 0px;
  }
`;
