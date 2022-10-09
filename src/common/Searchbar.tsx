import React from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function onChange() {
  console.log("hej");
}

function Searchbar({ value, onChange }: any) {
  return (
    <SearchDiv>
      <div>
        <input
          type="text"
          name="query"
          className="form-control my-3"
          placeholder="Search..."
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
        />
      </div>
    </SearchDiv>
  );
}

export default Searchbar;

const SearchDiv = styled.div`
  height: 99px;
  width: 100%;
  border: 1px solid black;
  border-top-right-radius: 35px;

  input {
    height: 50px;
    width: 200px;
    border: 5px solid black;
    border-radius: 35px;
    margin-left: 1400px;
    margin-top: 10px;
    cursor: pointer;
  }
`;
