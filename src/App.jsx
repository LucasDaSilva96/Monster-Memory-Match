import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MONSTERS_EASY, MONSTERS_MEDIUM, MONSTERS_HARD } from "./data/monsters";
import CardsWrapper from "./ui/CardsWrapper";
import StartScreen from "./ui/StartScreen";
import Spinner from "./ui/Spinner";
import { setHighScore, setLocalStorage } from "./js/setHighScore";
import { getHighScore } from "./js/getHighScore";
import HighScore from "./ui/HighScore";
import GameOver from "./ui/GameOver";

// Global variables
const MONSTERS_SELECTED = [];
let CURRENT_POINT = 0;

// Styled component for main wrapper
const MainWrapper = styled.main`
  padding: 10px 150px 10px 10px;
`;

function App() {
  // State variables using React Hooks
  const [rotate, setRotate] = useState(false);
  const [level, setLevel] = useState("");
  const [selectedArray, setSelectedArray] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // useEffect hook to handle side effects and lifecycle events
  useEffect(() => {
    // Switch statement to set selectedArray based on the chosen level
    switch (level) {
      case "Easy":
        setSelectedArray(shuffle(MONSTERS_EASY));
        break;
      case "Medium":
        setSelectedArray(shuffle(MONSTERS_MEDIUM));
        break;
      case "Hard":
        setSelectedArray(shuffle(MONSTERS_HARD));
        break;
      default:
        break;
    }

    // Set local storage and toggle loading state
    setLocalStorage();
    setIsLoading((prevLoading) => !prevLoading);

    // Function to handle loading timeout
    const loadingTimeout = () => {
      setTimeout(() => {
        setIsLoading((prevLoading) => !prevLoading);
      }, 1500);
    };

    // Call the loadingTimeout function
    loadingTimeout();

    // Cleanup function to clear the loading timeout
    return () => clearTimeout(loadingTimeout);
  }, [level]);

  // Function to shuffle an array
  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Function to handle card selection
  function handleCardSelection(monster) {
    const hasSelected = MONSTERS_SELECTED.includes(monster);

    if (hasSelected) {
      setGameOver((prevGameOver) => !prevGameOver);
      return;
    } else {
      setRotate((prevRotate) => !prevRotate);
      MONSTERS_SELECTED.push(monster);

      // Update CURRENT_POINT based on the chosen level
      switch (level) {
        case "Easy":
          CURRENT_POINT += 5;
          break;
        case "Medium":
          CURRENT_POINT += 10;
          break;
        case "Hard":
          CURRENT_POINT += 15;
          break;
        default:
          break;
      }

      // Set high score and update selectedArray with a shuffle after a delay
      setHighScore(level, CURRENT_POINT);
      setTimeout(() => setSelectedArray((value) => shuffle(value)), 700);

      // Toggle rotate after a delay
      setTimeout(() => setRotate((prevRotate) => !prevRotate), 2000);
    }
  }

  return (
    <React.Fragment>
      {/* Loading spinner */}
      {isLoading && <Spinner />}

      {/* Display StartScreen component if not started and not loading */}
      {!startGame && !isLoading && GameOver && (
        <StartScreen
          handleLevel={setLevel}
          handleStartGame={setStartGame}
        ></StartScreen>
      )}

      {/* Display game components if started and not loading */}
      {startGame && !isLoading && GameOver && (
        <MainWrapper>
          <CardsWrapper
            rotate={rotate}
            selectedArray={selectedArray}
            handleFunction={handleCardSelection}
          />
          <HighScore
            HighScoreData={getHighScore()}
            currentPoint={CURRENT_POINT}
          />
        </MainWrapper>
      )}

      {/* Display GameOver component if game over */}
      {gameOver && (
        <GameOver
          highScore={getHighScore()}
          currentPoint={CURRENT_POINT}
          level={level}
        />
      )}
    </React.Fragment>
  );
}

export default App;
