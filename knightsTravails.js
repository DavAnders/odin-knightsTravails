// BFS for this involves:
// Initializing a queue with the start position.
// Using a set to track visited positions to prevent revisiting and cycles.
// For each position, calculate all valid moves, check if they reach the target, and track the path.

function knightMoves(start, target) {
  const directions = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === target[0] && y === target[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((p) => console.log(p));
      return path;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < 8 &&
        ny >= 0 &&
        ny < 8 &&
        !visited.has([nx, ny].toString())
      ) {
        visited.add([nx, ny].toString());
        queue.push([...path, [nx, ny]]);
      }
    }
  }
}

knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
