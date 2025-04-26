const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tileSize = 20;

// Maze array
const maze = [
  [1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1],
  [1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1],
  [1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
  [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
  [1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1],
  [1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1],
  [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1],
  [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1],
  [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
  [1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

// Player
let player = { x: 0, y: 0 };

// Draw the maze with lines
function drawMaze() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === 1) {
                // Draw walls only
                ctx.beginPath();
                ctx.moveTo(x * tileSize, y * tileSize);
                ctx.lineTo((x + 1) * tileSize, y * tileSize);
                ctx.lineTo((x + 1) * tileSize, (y + 1) * tileSize);
                ctx.lineTo(x * tileSize, (y + 1) * tileSize);
                ctx.closePath();
                ctx.stroke();
            }
        }
    }
}

// Draw player
function drawPlayer() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(
        player.x * tileSize + tileSize / 2,
        player.y * tileSize + tileSize / 2,
        tileSize / 3,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

// Movement
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && player.y > 0 && maze[player.y - 1][player.x] === 0) {
        player.y--;
    }
    if (e.key === "ArrowDown" && player.y < maze.length - 1 && maze[player.y + 1][player.x] === 0) {
        player.y++;
    }
    if (e.key === "ArrowLeft" && player.x > 0 && maze[player.y][player.x - 1] === 0) {
        player.x--;
    }
    if (e.key === "ArrowRight" && player.x < maze[0].length - 1 && maze[player.y][player.x + 1] === 0) {
        player.x++;
    }
    gameLoop();
});

// Game loop
function gameLoop() {
    drawMaze();
    drawPlayer();
}

// Start
gameLoop();
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tileSize = 20;

// Maze array
const maze = [
  [1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1],
  [1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1],
  [1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1],
  [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
  [1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1],
  [1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1],
  [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1],
  [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1],
  [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1],
  [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
  [1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

// Player
let player = { x: 0, y: 0 };

// Draw the maze with lines
function drawMaze() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === 1) {
                // Draw walls only
                ctx.beginPath();
                ctx.moveTo(x * tileSize, y * tileSize);
                ctx.lineTo((x + 1) * tileSize, y * tileSize);
                ctx.lineTo((x + 1) * tileSize, (y + 1) * tileSize);
                ctx.lineTo(x * tileSize, (y + 1) * tileSize);
                ctx.closePath();
                ctx.stroke();
            }
        }
    }
}

// Draw player
function drawPlayer() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(
        player.x * tileSize + tileSize / 2,
        player.y * tileSize + tileSize / 2,
        tileSize / 3,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

// Movement
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && player.y > 0 && maze[player.y - 1][player.x] === 0) {
        player.y--;
    }
    if (e.key === "ArrowDown" && player.y < maze.length - 1 && maze[player.y + 1][player.x] === 0) {
        player.y++;
    }
    if (e.key === "ArrowLeft" && player.x > 0 && maze[player.y][player.x - 1] === 0) {
        player.x--;
    }
    if (e.key === "ArrowRight" && player.x < maze[0].length - 1 && maze[player.y][player.x + 1] === 0) {
        player.x++;
    }
    gameLoop();
});

// Game loop
function gameLoop() {
    drawMaze();
    drawPlayer();
}

// Start
gameLoop();
