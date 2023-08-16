function solution(s) {
  let answer = 0;
  let xInfo = [s[0], 0];
  let notXCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === xInfo[0]) {
      xInfo[1] += 1;
    } else {
      notXCount += 1;
    }
    if (xInfo[1] === notXCount) {
      answer += 1;
      if (i === s.length - 1) break;
      xInfo = [s[i + 1], 0];
      notXCount = 0;
    } else {
      if (i === s.length - 1) {
        answer += 1;
      }
    }
  }

  return answer;
}

```
'평균 시간: 12.178ms'
'평균 메모리: 34.567MB'
'최고 시간: 452ms'
'최저 시간: 0.05ms'
'최고 메모리: 37MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 30573.058'
'메모리 표준 편차: 20.167'
```;
