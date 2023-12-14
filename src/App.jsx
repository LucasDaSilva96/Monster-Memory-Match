import styled from "styled-components";
import { MONSTERS_EASY, MONSTERS_MEDIUM, MONSTERS_HARD } from "./data/monsters";
import Card from "./ui/Card";
import React, { useCallback, useEffect, useState } from "react";
import CardsWrapper from "./ui/CardsWrapper";
import StartScreen from "./ui/StartScreen";
import Spinner from "./ui/Spinner";

const Container = styled.main`
  max-width: 100%;
  min-height: 100vh;
  padding: 10px;
`;

const MONSTERS_SELECTED = [];

function App() {
  const [rotate, setRotate] = useState(false);
  const [level, setLevel] = useState("");
  const [selectedArray, setSelectedArray] = useState(null);
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    if (level === "Easy") setSelectedArray(MONSTERS_EASY);
    if (level === "Medium") setSelectedArray(MONSTERS_MEDIUM);
    if (level === "Hard") setSelectedArray(MONSTERS_HARD);
  }, [level, selectedArray]);

  const shuffle = useCallback((array) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }, []);

  function handleCardSelection(monster) {
    const hasSelected = MONSTERS_SELECTED.findIndex((el) => el === monster);
    if (hasSelected >= 0) {
      window.alert("You lost");
      return;
    } else {
      setRotate((e) => !e);
      MONSTERS_SELECTED.push(monster);
      setTimeout(() => {
        setSelectedArray((value) => (value = shuffle(value)));
      }, 1000);

      setTimeout(() => {
        setRotate((e) => !e);
      }, 1500);
    }
  }

  return (
    <React.Fragment>
      <Spinner />
    </React.Fragment>
  );
}

export default App;
