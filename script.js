const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tileSize = 20; // Smaller tiles

// Smaller example maze: 1 = wall, 0 = path
const maze = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
  [1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
  [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
  [1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],
  [1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
  [1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],
  [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
  [1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],
  [1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
  [1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],
  [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

// Player starting position
let player = {
  x: 1,
  y: 1
};

function drawMaze() {
  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      if (maze[row][col] === 1) {
        ctx.fillStyle = "white";
      } else {
        ctx.fillStyle = "black";
      }
      ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
    }
  }
}

function drawPlayer() {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(player.x * tileSize + tileSize / 2, player.y * tileSize + tileSize / 2, tileSize / 3, 0, Math.PI * 2);
  ctx.fill();
}

function gameLoop() {
  drawMaze();
  drawPlayer();
}

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && maze[player.y - 1][player.x] === 0) {
    player.y--;
  }
  if (e.key === "ArrowDown" && maze[player.y + 1][player.x] === 0) {
    player.y++;
  }
  if (e.key === "ArrowLeft" && maze[player.y][player.x - 1] === 0) {
    player.x--;
  }
  if (e.key === "ArrowRight" && maze[player.y][player.x + 1] === 0) {
    player.x++;
  }
  gameLoop();
});

// First draw
gameLoop();
