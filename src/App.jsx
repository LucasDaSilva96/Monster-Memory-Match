import { MONSTERS_EASY, MONSTERS_MEDIUM, MONSTERS_HARD } from "./data/monsters";
import React, { useCallback, useEffect, useState } from "react";
import CardsWrapper from "./ui/CardsWrapper";
import StartScreen from "./ui/StartScreen";
import Spinner from "./ui/Spinner";
import { setHighScore, setLocalStorage } from "./js/setHighScore";
import { getHighScore } from "./js/getHighScore";

const MONSTERS_SELECTED = [];

function App() {
  const [rotate, setRotate] = useState(false);
  const [level, setLevel] = useState("");
  const [selectedArray, setSelectedArray] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (level === "Easy") setSelectedArray(MONSTERS_EASY);
    if (level === "Medium") setSelectedArray(MONSTERS_MEDIUM);
    if (level === "Hard") setSelectedArray(MONSTERS_HARD);
    setLocalStorage();
    setIsLoading((e) => !e);
    setTimeout(() => {
      setIsLoading((e) => !e);
    }, 1500);
  }, [level]);

  const shuffle = (array) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };

  function handleCardSelection(monster) {
    const hasSelected = MONSTERS_SELECTED.findIndex((el) => el === monster);
    if (hasSelected >= 0) {
      window.alert("You lost");
      return;
    } else {
      setRotate((e) => !e);
      MONSTERS_SELECTED.push(monster);
      setHighScore(level);
      setTimeout(() => {
        setSelectedArray((value) => (value = shuffle(value)));
      }, 700);

      setTimeout(() => {
        setRotate((e) => !e);
      }, 2000);
    }
  }

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {!startGame && !isLoading && (
        <StartScreen
          handleLevel={setLevel}
          handleStartGame={setStartGame}
        ></StartScreen>
      )}
      {startGame && !isLoading && (
        <CardsWrapper
          rotate={rotate}
          selectedArray={selectedArray}
          handleFunction={handleCardSelection}
        />
      )}
    </React.Fragment>
  );
}

export default App;
