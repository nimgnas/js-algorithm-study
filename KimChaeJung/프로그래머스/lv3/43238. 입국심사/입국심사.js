function solution(n, times) {
  let [start, end] = [1, Number.MAX_SAFE_INTEGER];
  const result = [];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const total = times.reduce((a, b) => a + Math.floor(mid / b), 0);
    if (total >= n) {
      end = mid - 1;
      result.push(mid);
    } else {
      start = mid + 1;
    }
  }

  return Math.min(...result);
}

// 결과
```
'평균 시간: 49.773ms'
'평균 메모리: 38.056MB'
'최고 시간: 91.1ms'
'최저 시간: 0.21ms'
'최고 메모리: 41.8MB'
'최저 메모리: 33.5MB'
'시간 표준 편차: 4923.583'
'메모리 표준 편차: 42.988'
```;

// Math.min(...result) -> Math.min(result, mid)
function solution(n, times) {
  let [start, end] = [1, Number.MAX_SAFE_INTEGER];
  let result = Number.MAX_SAFE_INTEGER;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const total = times.reduce((a, b) => a + Math.floor(mid / b), 0);
    if (total >= n) {
      end = mid - 1;
      result = Math.min(result, mid);
    } else {
      start = mid + 1;
    }
  }

  return result;
}

// 결과'
```
'평균 시간: 54.259ms'
'평균 메모리: 38.056MB'
'최고 시간: 115ms'
'최저 시간: 0.23ms'
'최고 메모리: 41.8MB'
'최저 메모리: 33.5MB'
'시간 표준 편차: 6068.604'
'메모리 표준 편차: 43.668'
```;
