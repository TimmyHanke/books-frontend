import React from "react";
import styled from "styled-components";
import { IBook } from "../types/IBook";
import { Isidebar } from "../types/Isidebar";
import Books from "./Books";
import Sidebar from "../common/Sidebar";
import Searchbar from "../common/Searchbar";
import Property from "../common/Property";

function Booklist() {
  return (
    <div>
      <SearchDiv>
        <div>
          <Property />
        </div>
        <div>
          <Searchbar />
        </div>
      </SearchDiv>
      <Container>
        <div>
          <Sidebar Explore={"Explore"} Genre={"Genre"} Auther={"Auther"} />
        </div>
        <Books />
      </Container>
    </div>
  );
}

export default Booklist;

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  grid-template-rows: 300px;
  width: 100%;
  height: 100%;

  p {
    font-size: 12px;
    padding-left: 30px;
  }

  img {
    border: 15px blue;
    border-radius: 16px;
    width: 150px;
    height: 150px;
    padding-right: 5px;
  }
`;
const SearchDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr;
  height: 100%;
  width: 100%;
`;
