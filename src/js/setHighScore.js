import { getHighScore } from "./getHighScore";

let pointsEasy = 0,
  pointsMedium = 0,
  pointsHard = 0;
export function setHighScore(level) {
  if (level === "Easy") {
    pointsEasy <= 98
      ? (pointsEasy = Math.round(pointsEasy + 1.098))
      : (pointsEasy = 100);
    setLocalStorage(level, pointsEasy);
    return pointsEasy;
  }

  if (level === "Medium") {
    pointsMedium <= 97
      ? (pointsMedium = Math.round(pointsMedium + 2.5))
      : (pointsMedium = 100);
    setLocalStorage(level, pointsMedium);
    return pointsMedium;
  }

  if (level === "Hard") {
    pointsHard <= 95
      ? (pointsHard = Math.round(pointsHard + 5))
      : (pointsHard = 100);
    setLocalStorage(level, pointsHard);
    return pointsHard;
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
  if (level === "Easy") data[0].Easy += points;
  if (level === "Medium") data[1].Medium += points;
  if (level === "Hard") data[2].Hard += points;

  return window.localStorage.setItem("highScore", JSON.stringify(data));
}
