import React from "react";
import styled from "styled-components";

// Styled Components
const HighScoreWrapper = styled.aside`
  width: 150px;
  border-radius: 10px;
  background-color: transparent;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: fixed;
  top: 20px;
  right: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  row-gap: 5px;
  place-content: center;
`;

const ScoreBox = styled.div`
  background-color: ${(props) =>
    props.easy
      ? "#5EC266"
      : props.medium
      ? "#DFE71A"
      : props.hard
      ? "#E71A3F"
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const QuitBtn = styled.button`
  width: 100%;
  height: 20px;
  border: 1.5px solid #e71a3f;
  background-color: transparent;
  border-radius: 10px;
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

function HighScore({ HighScoreData, currentPoint }) {
  const easyScore = HighScoreData[0].Easy;
  const mediumScore = HighScoreData[1].Medium;
  const hardScore = HighScoreData[2].Hard;

  return (
    <HighScoreWrapper>
      <h1>High score</h1>

      {/* Display Easy, Medium, and Hard Scores */}
      <ScoreBox easy="true">
        <p>
          Easy: <strong>{easyScore}</strong>
        </p>
      </ScoreBox>
      <ScoreBox medium="true">
        <p>
          Medium: <strong>{mediumScore}</strong>
        </p>
      </ScoreBox>
      <ScoreBox hard="true">
        <p>
          Hard: <strong>{hardScore}</strong>
        </p>
      </ScoreBox>

      {/* Display Current Score */}
      <ScoreBox>
        <p>
          Score: <strong>{currentPoint}</strong>
        </p>
      </ScoreBox>

      {/* Quit Button */}
      <QuitBtn onClick={() => window.location.reload()}>Quit</QuitBtn>
    </HighScoreWrapper>
  );
}

export default HighScore;
