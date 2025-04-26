<canvas id="gameCanvas" width="320" height="320" style="background: black;"></canvas>

<script>
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const tileSize = 20;

// Your maze structure
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

// Draw Maze using lines
function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === 1) {
                // Draw lines around the wall
                let px = x * tileSize;
                let py = y * tileSize;

                ctx.beginPath();
                // Top wall
                if (y === 0 || maze[y - 1][x] === 0) {
                    ctx.moveTo(px, py);
                    ctx.lineTo(px + tileSize, py);
                }
                // Left wall
                if (x === 0 || maze[y][x - 1] === 0) {
                    ctx.moveTo(px, py);
                    ctx.lineTo(px, py + tileSize);
                }
                // Right wall
                if (x === maze[y].length - 1 || maze[y][x + 1] === 0) {
                    ctx.moveTo(px + tileSize, py);
                    ctx.lineTo(px + tileSize, py + tileSize);
                }
                // Bottom wall
                if (y === maze.length - 1 || maze[y + 1][x] === 0) {
                    ctx.moveTo(px, py + tileSize);
                    ctx.lineTo(px + tileSize, py + tileSize);
                }
                ctx.stroke();
            }
        }
    }
}

// Draw the player
function drawPlayer() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(
        player.x * tileSize + tileSize / 2,
        player.y * tileSize + tileSize / 2,
        tileSize / 4,
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
</script>
