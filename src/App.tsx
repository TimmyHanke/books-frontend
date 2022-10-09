import Booklist from "./components/Booklist";
import styled from "styled-components";

function App() {
  return (
    <AppDiv>
      <div>
        <Booklist />
      </div>
    </AppDiv>
  );
}

export default App;

const AppDiv = styled.div`
  margin: 50px;
`;
