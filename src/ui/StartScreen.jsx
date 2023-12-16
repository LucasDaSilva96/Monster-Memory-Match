import React from "react";
import styled from "styled-components";
import "../css/startScreen.css";
import LevelButton from "./LevelButton";
import Instructions from "./Instructions";

const StartPage = styled.section`
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  overflow: hidden;
`;

function StartScreen({ handleLevel, handleStartGame }) {
  return (
    <StartPage>
      <div className="container">
        {/* Background Images */}
        <div className="background-img-2"></div>
        <div className="background-img-3"></div>
        <div className="background-img">
          {/* Main Content Box */}
          <div className="box">
            {/* Decorative spans */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            {/* Content Section */}
            <div className="content">
              <h2>Select level</h2>

              {/* Level Buttons */}
              <LevelButton
                levelText="Easy"
                handleLevel={handleLevel}
                handleStartGame={handleStartGame}
              />
              <LevelButton
                levelText="Medium"
                handleStartGame={handleStartGame}
                handleLevel={handleLevel}
              />
              <LevelButton
                levelText="Hard"
                handleStartGame={handleStartGame}
                handleLevel={handleLevel}
              />
            </div>
          </div>
        </div>

        <Instructions />
      </div>
    </StartPage>
  );
}

export default StartScreen;
