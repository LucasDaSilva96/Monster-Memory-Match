import { getHighScore } from "./getHighScore";

export function setHighScore(level, currentPoint) {
  const data = getHighScore();
  if (level === "Easy" && currentPoint > data[0].Easy) {
    return setLocalStorage("Easy", currentPoint);
  }

  if (level === "Medium" && currentPoint > data[1].Medium) {
    return setLocalStorage("Medium", currentPoint);
  }

  if (level === "Hard" && currentPoint > data[2].Hard) {
    return setLocalStorage("Hard", currentPoint);
  }
}

export function setLocalStorage(level, points) {
  if (!window.localStorage.getItem("highScore")) {
    return window.localStorage.setItem(
      "highScore",
      JSON.stringify([
        {
          Easy: 0,
        },
        {
          Medium: 0,
        },
        {
          Hard: 0,
        },
      ])
    );
  }

  let data = getHighScore();
  if (level === "Easy") data[0].Easy = points;
  if (level === "Medium") data[1].Medium = points;
  if (level === "Hard") data[2].Hard = points;

  return window.localStorage.setItem("highScore", JSON.stringify(data));
}
