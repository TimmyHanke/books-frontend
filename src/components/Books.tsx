import React, { useEffect, useState } from "react";
import axios from "axios";
import { IBook } from "../types/IBook";
import { IgetPaginate } from "../types/IgetPaginate";
import styled from "styled-components";
import { paginate } from "../utils/paginate";
import _ from "lodash";

function Books() {
  const [selectedPage, setselectedPage] = useState(1);
  const [pageSize, setpageSize] = useState(3);
  const [allBooks, setallBook] = useState<IBook[]>([]);
  const [sortColumn, setsortColumn] = useState({ path: "name", order: "asc" });
  const [path, setpath] = useState("");
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const { data: allBooks } = await axios.get<IBook[]>(
      "http://localhost:8000/api/books/"
    );
    const books: any = paginate(allBooks, selectedPage, pageSize);
    setallBook(books);
  };

  function getPaginatedBooks({
    pageSize,
    selectedPage,
    searchQuery,
    sortColumn,
    allBooks,
  }: IgetPaginate) {
    let filteredBooks = allBooks;

    filteredBooks = allBooks.filter((f: IBook) =>
      f.titel.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedBooks: any = _.orderBy(
      filteredBooks,
      [sortColumn.path],
      [sortColumn.order]
    );
    const books: any = paginate(sortedBooks, selectedPage, pageSize);
    setallBook(books);
    return { books, filteredCount: filteredBooks.length };
  }

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
