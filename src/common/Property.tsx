import React from "react";
import styled from "styled-components";

function Property() {
  return (
    <SearchDiv>
      <div>
        <p>Books</p>
      </div>
    </SearchDiv>
  );
}

export default Property;

const SearchDiv = styled.div`
  height: 100px;
  width: 199px;
  border: 1px solid black;
  border-top-left-radius: 35px;
  background-color: blue;

  p {
    place-items: center;
    margin-bottom: 10px;
    margin-left: 60px;
    font-size: 25px;
  }
`;
