import styled from "styled-components";

const PopUpBox = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 500;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  border-radius: 200px;
  border: 2px solid black;
  cursor: pointer;
  &:hover :nth-child(2) {
    transform: translateX(0);
  }
`;

const Text = styled.p`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  top: 0px;
  right: 70px;
  position: absolute;
  transform: translateX(1200px);
  transition: transform 0.5s linear;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  width: 500px;
  color: black;
  padding: 10px;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 1.3;
  letter-spacing: 0.8px;
`;

function Instructions() {
  return (
    <PopUpBox>
      <img src=".././src/img/male_icon.png" alt="Avatar" />
      <Text className="Text">
        A grid of mysterious monster cards will appear based on your chosen
        difficulty level. Your goal is to <strong>NOT</strong> choose the same
        card twice. Strive to accumulate as many points as possible. Remember,
        you cannot choose the same card twice in a row. Doing so will bring the
        game to an end, and your final score will be recorded.
      </Text>
    </PopUpBox>
  );
}

export default Instructions;
