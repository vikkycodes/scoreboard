import { useState } from "react";
import Board from "./Components/Board";
import Nav from "./Components/Navbar";
import Profile from "./Components/Profile";
import GlobalStyle from "./Components/styles/Global";
import styled from "styled-components";
import { data } from "./services/data";

const Container = styled.div`
  padding: 25px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

function App() {
  const [page, setPage] = useState("home");
  const [interns, setInterns] = useState(data);
  // const [rewarded, setRewarded] = useState([])

  const handleReward = (intern) => {
    const newInterns = interns.filter((m) => m.id !== intern.id);
    setInterns(newInterns);
  };

  const handlePage = (intern) => {
    setPage("profile");
    console.log(intern);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Nav setPage={setPage} />
      <Container>
        {page === "home" ? (
          <Board
            interns={interns}
            onReward={handleReward}
            onPage={handlePage}
          />
        ) : (
          <Profile name={"Tappi Messi"} />
        )}
      </Container>
    </div>
  );
}

export default App;
