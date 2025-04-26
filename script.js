const canvas = document.getElementById('mazeCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size according to your maze
canvas.width = 400;
canvas.height = 400;

// Wall style
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;

// Maze dimensions
const cellSize = 25; // adjust based on your original maze size

function drawMaze() {
    // Top horizontal lines
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, 0);
    ctx.stroke();

    // Bottom horizontal line
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    // Left vertical line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, canvas.height);
    ctx.stroke();

    // Right vertical line
    ctx.beginPath();
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    // Now draw the internal walls based on your maze layout:
    // Example: (you can add more based on your maze)
    drawHorizontalLine(1, 1, 3); // draws from cell (1,1) to (3,1)
    drawVerticalLine(3, 1, 4);   // draws from cell (3,1) down to (3,4)
    // keep adding similar drawHorizontalLine / drawVerticalLine
}

// Helper to draw horizontal wall
function drawHorizontalLine(xStart, yStart, xEnd) {
    ctx.beginPath();
    ctx.moveTo(xStart * cellSize, yStart * cellSize);
    ctx.lineTo(xEnd * cellSize, yStart * cellSize);
    ctx.stroke();
}

// Helper to draw vertical wall
function drawVerticalLine(xStart, yStart, yEnd) {
    ctx.beginPath();
    ctx.moveTo(xStart * cellSize, yStart * cellSize);
    ctx.lineTo(xStart * cellSize, yEnd * cellSize);
    ctx.stroke();
}

drawMaze();
