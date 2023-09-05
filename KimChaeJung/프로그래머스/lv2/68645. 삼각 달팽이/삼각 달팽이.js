function solution(n) {
  var answer = [];
  if (n === 1) return [1];
  const total = ((1 + n) * n) / 2;
  let curr = 1;
  let [r, c] = [0, 0];
  let dir = 0; // 0: down, 1: right, 2: up
  const snailArr = Array.from({ length: n }, (_, idx) =>
    Array(idx + 1).fill(0)
  );
  while (curr <= total) {
    snailArr[r][c] = curr;
    if (dir === 0) {
      r += 1;
      if (r >= n - c) {
        dir += 1;
        r -= 1;
        c += 1;
      }
    } else if (dir === 1) {
      c += 1;
      if ((c > r + 1) | (snailArr[r][c] != 0)) {
        dir = 2;
        r -= 1;
        c -= 2;
      }
    } else {
      r -= 1;
      c -= 1;
      if (snailArr[r][c] != 0) {
        dir = 0;
        r += 2;
        c += 1;
      }
    }
    curr += 1;
  }
  // way01: reduce + concat
  return snailArr.reduce((a, b) => a.concat(...b), []);
  // way02: flat
  return snailArr.flat();
}

// way01 결과
```
'평균 시간: 692.893ms'
'평균 메모리: 58.544MB'
'최고 시간: 2156ms'
'최저 시간: 0.07ms'
'최고 메모리: 113MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 2719478.437'
'메모리 표준 편차: 3014.180'
```;

// way02 결과
```
'평균 시간: 44.989ms'
'평균 메모리: 57.433MB'
'최고 시간: 154ms'
'최저 시간: 0.08ms'
'최고 메모리: 106MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 11442.157'
'메모리 표준 편차: 2759.457'
```;
