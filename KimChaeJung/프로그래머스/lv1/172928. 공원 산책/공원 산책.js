function solution(park, routes) {
  const opMap = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };
  const size = [park.length, park[0].length];
  let answer = [0, 0];
  for (const [y, row] of park.entries()) {
    for (const [x, cell] of row.split("").entries()) {
      if (cell === "S") answer = [y, x];
    }
  }

  routes.forEach((route) => {
    const [op, n] = route.split(" ");
    const [y, x] = answer;
    // obstacle test
    let hasObstacle = false;
    const dy = opMap[op][0];
    const dx = opMap[op][1];

    if (op === "N" || op === "S") {
      if (y + n * dy < 0 || y + n * dy > size[0] - 1) return;
      for (let i = 1; i <= n; i++) {
        if (park[y + i * dy][x] === "X") {
          hasObstacle = true;
          break;
        }
      }
    }

    if (op === "W" || op === "E") {
      if (x + n * dx < 0 || x + n * dx > size[1] - 1) return;
      for (let i = 1; i <= n; i++) {
        if (park[y][x + i * dx] === "X") {
          hasObstacle = true;
          break;
        }
      }
    }

    if (hasObstacle) return;

    answer = [y + dy * n, x + dx * n];
  });

  return answer;
}

// 다른 사람 풀이

function solution(park, routes) {
  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  let [x, y] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      [x, y] = [i, park[i].indexOf("S")];
      break;
    }
  }

  routes.forEach((route) => {
    const [r, n] = route.split(" ");
    let [nx, ny] = [x, y];
    let cnt = 0;
    while (cnt < n) {
      [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === "X") break;
      cnt++;
    }
    if (cnt == n) [x, y] = [nx, ny];
  });
  return [x, y];
}
