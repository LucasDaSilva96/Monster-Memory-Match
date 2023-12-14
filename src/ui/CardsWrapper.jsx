import styled from "styled-components";
import Card from "./Card";
import { Children } from "react";

const Wrapper = styled.section`
  max-width: 100%;
  min-height: 100vh;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  row-gap: 10px;
`;

function CardsWrapper({ rotate, selectedArray, handleFunction }) {
  return (
    <Wrapper>
      {selectedArray.map((card, i) => {
        return (
          <Card
            image_src={card.image_src}
            rotate={rotate}
            monster={card.monster}
            handleFunction={handleFunction}
            key={i}
          />
        );
      })}
    </Wrapper>
  );
}

export default CardsWrapper;
