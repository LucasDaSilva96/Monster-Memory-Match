export function getHighScore() {
  if (window.localStorage.getItem("highScore").length > 0) {
    const data = JSON.parse(window.localStorage.getItem("highScore"));
    return data;
  }
}
