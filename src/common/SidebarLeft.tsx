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
    <SidebarLeft>
      <div>
        {sidebar.map((bar) => (
          <div key={bar._id}>
            <button>{bar.name}</button>
          </div>
        ))}
      </div>
    </SidebarLeft>
  );
}

export default Sidebar;

const SidebarLeft = styled.div`
  height: 200%;
  width: 199px;
  border: 1px solid black;
  border-bottom-left-radius: 35px;
  background-color: yellow;

  button {
    height: 25px;
    width: 200px;
    border: 1px solid gray;
    border-radius: 30px;
  }
`;
