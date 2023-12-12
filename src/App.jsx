import styled from "styled-components";
import { MONSTERS_EASY, MONSTERS_MEDIUM, MONSTERS_HARD } from "./data/monsters";
import Card from "./ui/Card";
import { useCallback, useEffect, useState } from "react";

const Wrapper = styled.main`
  max-width: 100%;
  min-height: 100vh;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  row-gap: 10px;
`;

const MONSTERS_SELECTED = [];
let selectedArray = MONSTERS_HARD;

function App() {
  const [rotate, setRotate] = useState(false);

  const shuffle = useCallback((array) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  }, []);

  function handleCardRotate(monster) {
    // setRotate((e) => !e);
    handleCardSelection(monster);
  }

  function handleCardSelection(monster) {
    const hasSelected = MONSTERS_SELECTED.findIndex((el) => el === monster);
    if (hasSelected >= 0) {
      window.alert("You lost");
      return;
    } else {
      MONSTERS_SELECTED.push(monster);
      setRotate((e) => !e);
      selectedArray = shuffle(selectedArray);
      setTimeout(() => {
        setRotate((e) => !e);
      }, 1000);
    }
  }

  return (
    <Wrapper>
      <Card rotate={rotate} handleCardRotate={handleCardRotate} />
      {!rotate
        ? selectedArray.map((card) => {
            return (
              <Card
                rotate={rotate}
                handleCardRotate={handleCardRotate}
                monster={card.monster}
                image_src={card.image_src}
                key={card.monster}
              />
            );
          })
        : selectedArray.map((card) => {
            return (
              <Card
                rotate={!rotate}
                handleCardRotate={handleCardRotate}
                monster={card.monster}
                image_src={card.image_src}
                key={card.monster}
              />
            );
          })}
    </Wrapper>
  );
}

export default App;
