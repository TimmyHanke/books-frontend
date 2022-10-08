import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { IBook } from "../types/IBook";
import { Isidebar } from "../types/Isidebar";
import Books from "./Books";
import Sidebarleft from "../common/SidebarLeft";
import SidebarRight from "../common/SidebarRight";
import Searchbar from "../common/Searchbar";
import Property from "../common/Property";
import Bottom from "../common/Bottom";

function Booklist() {
  const [selectedPage, setselectedPage] = useState(1);
  const [pageSize, setpageSize] = useState(4);

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
          <Sidebarleft Explore={"Explore"} Genre={"Genre"} Auther={"Auther"} />
        </div>
        <Books />
        <div>
          <SidebarRight />
        </div>
      </Container>
      <Bottom />
    </div>
  );
}

export default Booklist;

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 4fr 1fr;
  grid-template-rows: 300px;
  width: 100%;
  height: 602px;
  background-color: #fe0303;
  margin-bottom: 500px;
  font-size: 12px;
  padding-left: 1px;
  margin-bottom: -200px;

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
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  background-color: green;
`;
