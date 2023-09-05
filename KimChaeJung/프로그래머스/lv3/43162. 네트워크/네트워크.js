function solution(n, computers) {
  var answer = 0;
  const connected = computers.map((ele) =>
    ele.map((info, idx) => (info === 1 ? idx : "_")).filter((e) => !isNaN(e))
  );

  let visited = Array(n).fill(0);

  function DFS(start, connect, visitedInfo) {
    let queue = [start];
    visitedInfo[start] = 1;
    while (queue.length > 0) {
      const curr = queue.pop();
      for (const next of connect[curr]) {
        if (visitedInfo[next] === 1) continue;
        queue.push(next);
        visited[next] = 1;
      }
    }

    return visitedInfo;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === 1) continue;
    visited = DFS(i, connected, visited);
    answer += 1;
  }

  return answer;
}
