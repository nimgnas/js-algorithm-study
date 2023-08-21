function countFactor(number) {
  let count = 0;
  for (let i = 1; i <= number ** (1 / 2); i++) {
    if (i ** 2 === number) {
      count += 1;
      break;
    }
    if (number % i === 0) count += 2;
  }
  return count;
}
function solution(number, limit, power) {
  return Array.from({ length: number }, (_, idx) => idx + 1)
    .map((ele) => {
      const factor = countFactor(ele);
      return factor > limit ? power : factor;
    })
    .reduce((a, b) => a + b, 0);
}

// 결과
```
'평균 시간: 42.701ms'
'평균 메모리: 36.174MB'
'최고 시간: 132ms'
'최저 시간: 0.1ms'
'최고 메모리: 37.6MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 16378.202'
'메모리 표준 편차: 14.918'
```;

// 우수 코드
function solution(number, limit, power) {
  var answer = 0;
  for (let n = 1; n <= number; n++) {
    let count = 0;
    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count += 1;
      else if (n % j == 0) count += 2;
    }
    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}

// 결과
```
'평균 시간: 41.030ms'
'평균 메모리: 35.933MB'
'최고 시간: 152ms'
'최저 시간: 0.04ms'
'최고 메모리: 36.5MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 15647.129'
'메모리 표준 편차: 12.664'
```;
