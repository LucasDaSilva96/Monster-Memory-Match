import "../css/levelButton.css";

function LevelButton({ handleLevel, levelText = "Easy", handleStartGame }) {
  return (
    <button
      className="level-btn"
      onClick={() => {
        handleLevel(levelText);
        setTimeout(() => {
          handleStartGame((e) => !e);
        }, 500);
      }}
    >
      {levelText}
    </button>
  );
}

export default LevelButton;
