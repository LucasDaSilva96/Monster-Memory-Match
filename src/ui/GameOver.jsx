import React from "react";
import styled from "styled-components";

// Styled Components
const GameOverBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 350px;
  border: 2px solid #2a3cad;
  text-align: center;
  border-radius: 20px;
  padding: 10px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  gap: 10px;
`;

const GameOverWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuitButton = styled.button`
  border: 1.5px solid #e71a3f;
  background-color: transparent;
  border-radius: 10px;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #e71a3f;
    color: whitesmoke;
  }
`;

function GameOver({ currentPoint, level, highScore }) {
  const easy = highScore[0].Easy;
  const medium = highScore[1].Medium;
  const hard = highScore[2].Hard;

  function resetGame() {
    return window.location.reload();
  }

  // Check if the current point is greater than the high score for the current level
  const isNewHighScore = (currentPoint, highScore) => currentPoint >= highScore;

  // Render the component based on the level and high score comparison
  const renderGameOver = () => {
    if (level === "Easy" && isNewHighScore(currentPoint, easy)) {
      return renderGameOverBox();
    }

    if (level === "Medium" && isNewHighScore(currentPoint, medium)) {
      return renderGameOverBox();
    }

    if (level === "Hard" && isNewHighScore(currentPoint, hard)) {
      return renderGameOverBox();
    }

    return renderDefaultGameOverBox();
  };

  // Render the default game over box
  const renderDefaultGameOverBox = () => (
    <GameOverBox>
      <h1>Game Over</h1>
      <h3 style={{ fontSize: "22px" }}>Score</h3>
      <h4 style={{ fontSize: "38px" }}>{currentPoint}</h4>
      <QuitButton onClick={resetGame}>quit</QuitButton>
    </GameOverBox>
  );

  // Render the game over box for a new high score
  const renderGameOverBox = () => (
    <GameOverBox>
      <h1>Game Over</h1>
      <img src="src/img/medal.png" alt="medal" style={{ marginLeft: "42%" }} />
      <h3 style={{ fontSize: "22px" }}>New high score on level {level}</h3>
      <h4 style={{ fontSize: "38px" }}>{currentPoint}</h4>
      <QuitButton onClick={resetGame}>quit</QuitButton>
    </GameOverBox>
  );

  return <GameOverWrapper>{renderGameOver()}</GameOverWrapper>;
}

export default GameOver;
