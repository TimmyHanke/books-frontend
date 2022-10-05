import React from "react";
import { Isidebar } from "../types/Isidebar";
import styled from "styled-components";

function Sidebar({ Explore, Genre, Auther }: Isidebar) {
  const sidebar = [
    { _id: "1", name: "Explore" },
    { _id: "2", name: "Genre" },
    { _id: "3", name: "Auther" },
  ];
  return (
    <SidebarDiv>
      <div>
        {sidebar.map((bar) => (
          <div key={bar._id}>
            <button>{bar.name}</button>
          </div>
        ))}
      </div>
    </SidebarDiv>
  );
}

export default Sidebar;

const SidebarDiv = styled.div`
  height: 150px;
  width: 200px;
  border: 1px solid black;

  button {
    height: 50px;
    width: 200px;
  }
`;
