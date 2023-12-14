import styled from "styled-components";
import "../css/startScreen.css";
import LevelButton from "./LevelButton";

const StartPage = styled.section`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
`;

function StartScreen({ handleLevel, handleStartGame }) {
  return (
    <StartPage>
      <div className="container">
        <div className="background-img-2"></div>
        <div className="background-img-3"></div>
        <div className="background-img">
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="content">
              <h2>Select level </h2>
              <LevelButton
                levelText={"Easy"}
                handleLevel={handleLevel}
                handleStartGame={handleStartGame}
              />
              <LevelButton
                levelText={"Medium"}
                handleStartGame={handleStartGame}
                handleLevel={handleLevel}
              />
              <LevelButton
                levelText={"Hard"}
                handleStartGame={handleStartGame}
                handleLevel={handleLevel}
              />
            </div>
          </div>
        </div>
      </div>
    </StartPage>
  );
}

export default StartScreen;
