function solution(n, m, section) {
  var answer = 0;

  const wall = Array.from({ length: n }, () => 1);
  section.forEach((v) => (wall[v - 1] = 0));

  for (let st = 0; st <= n - m; st++) {
    let sum = 0;
    let ed = st;

    if (wall[st] === 0 || st === n - m) {
      sum = 0;
      while (ed - st < m) {
        sum += wall[ed];
        if (wall[ed] === 0) wall[ed] = 1;
        ed++;
      }
      if (sum < m) answer++;
    }
  }

  return answer;
}

// 코드추가
function solution(n, m, section) {
  let count = 0;
  const arr = Array.from(Array(n + 1).fill(null));

  section.forEach((el) => {
    arr[el] = 1;
  });

  section.forEach((el) => {
    if (arr[el]) {
      arr.fill(null, el, el + m);
      count++;
    }
  });
  return count;
}
