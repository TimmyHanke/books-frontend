import React from "react";
import { Isidebar } from "../types/Isidebar";
import styled from "styled-components";

function SidebarRight() {
  return (
    <BarRight>
      <div>hej</div>
    </BarRight>
  );
}

export default SidebarRight;

const BarRight = styled.div`
  height: 200%;
  width: 199px;
  border: 1px solid black;
  border-bottom-right-radius: 35px;
  background-color: blue;
`;
