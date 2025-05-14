let score = 0;
let currentGame = "emojiTap"; // Start with emojiTap game

// Start Game button
document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
  score = 0;
  updateScore();
  startEmojiTap();
}

// Update score display
function updateScore() {
  document.getElementById("score").innerText = "Score: " + score;
}

// Emoji Tap Game
function startEmojiTap() {
  let emojis = ["😊", "😂", "😜", "😍", "😎"];
  let correctEmoji = "😊";
  let interval = setInterval(() => {
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    document.getElementById("game").innerHTML = `<button onclick="checkEmoji('${randomEmoji}')">${randomEmoji}</button>`;
  }, 1000);

  function checkEmoji(clickedEmoji) {
    if (clickedEmoji === correctEmoji) {
      score++;
      updateScore();
    } else {
      clearInterval(interval);
      alert("Game Over! Final Score: " + score);
    }
  }
}
