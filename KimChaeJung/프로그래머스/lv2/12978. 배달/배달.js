function solution(N, road, K) {
  let answer = 0;
  const INF = Number.POSITIVE_INFINITY;
  let weighInfo = Array.from({ length: N + 1 }, () => Array(N + 1).fill(INF));

  road.forEach((ele) => {
    const [a, b, c] = ele;
    if (weighInfo[a][b] === 0 || weighInfo[a][b] > c) {
      weighInfo[a][b] = c;
      weighInfo[b][a] = c;
    }
  });
  // 플로이드-와샬
  for (let k = 1; k < N + 1; k++) {
    for (let i = 1; i < N + 1; i++) {
      for (let j = 1; j < N + 1; j++) {
        if (i === j) {
          weighInfo[i][j] = 0;
        }
        weighInfo[i][j] = Math.min(
          weighInfo[i][j],
          weighInfo[i][k] + weighInfo[k][j]
        );
      }
    }
  }

  return weighInfo[1].filter((ele) => ele <= K).length;
}

// 다른 사람 코드 - 다익스트라
function solution(N, road, K) {
  const totalDist = new Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);

  road.forEach(([a, b, c]) => {
    adj[a].push({ to: b, dist: c });
    adj[b].push({ to: a, dist: c });
  });

  const queue = [{ to: 1, dist: 0 }];
  totalDist[1] = 0;

  while (queue.length) {
    let { to, dist } = queue.pop();

    adj[to].forEach((step) => {
      if (totalDist[step.to] > totalDist[to] + step.dist) {
        totalDist[step.to] = totalDist[to] + step.dist;
        queue.push(step);
      }
    });
  }

  return totalDist.filter((dist) => dist <= K).length;
}
