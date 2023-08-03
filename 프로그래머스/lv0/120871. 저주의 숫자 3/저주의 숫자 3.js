function solution(n) {
  var answer = 0;

  for (let i = 0; i < n; i++) {
    answer++;
    while (answer % 3 === 0 || answer % 10 === 3 || Math.floor(answer / 10) % 10 === 3) answer++;
  }

  return answer;
}

//코드추가
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      n++;
    }
    if (String(i).includes("3") & (i % 3 != 0)) {
      n++;
    }
  }
  return n;
}
