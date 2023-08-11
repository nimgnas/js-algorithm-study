function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => a - b);

  const numOfbox = Math.floor(score.length / m);

  for (let i = 0; i < numOfbox; i++) {
    if (score.length % m === 0) answer += score[i * m] * m;
    else answer += score[i * m + (score.length - m * numOfbox)] * m;
  }

  return answer;
}
