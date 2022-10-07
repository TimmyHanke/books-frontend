import React from "react";
import styled from "styled-components";

function Bottom(props) {
  return (
    <BottomDiv>
      <div>hej</div>
    </BottomDiv>
  );
}

export default Bottom;

const BottomDiv = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 200px;
  border: 1px solid black;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  background-color: purple;
`;
