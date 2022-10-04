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
        <Container key={book._id}>
          <img src={book.image} />
          <p>{book.titel}</p>
          <p>{book.genre.name}</p>
          <p>{book.auther.name}</p>
        </Container>
      ))}
    </div>
  );
}

export default Books;

const Container = styled.div`
  width: 150px;
  height: 250px;
  border: 2px solid black;
  border-radius: 16px;
  place-items: center;

  p {
    font-size: 12px;
    padding-left: 30px;
  }

  img {
    border: 15px #2a2831;
    border-radius: 16px;
    width: 150px;
    height: 150px;
    padding-right: 5px;
  }
`;
