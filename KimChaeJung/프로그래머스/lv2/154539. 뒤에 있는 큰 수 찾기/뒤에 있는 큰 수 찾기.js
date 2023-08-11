function solution(numbers) {
  const answer = Array(numbers.length);
  const LAST_IDX = numbers.length - 1;
  answer[LAST_IDX] = -1;
  const stack = [numbers[LAST_IDX]];
  for (let i = LAST_IDX - 1; i >= 0; i--) {
    let result = 0;
    if (numbers[i] < numbers[i + 1]) {
      result = numbers[i + 1];
    }
    if (numbers[i] == numbers[i + 1]) {
      result = answer[i + 1];
    }
    if (numbers[i] > numbers[i + 1]) {
      result = -1;
      while (stack.length > 0) {
        const lastStackEle = stack[stack.length - 1];
        if (lastStackEle <= numbers[i]) {
          stack.pop();
        } else {
          result = lastStackEle;
          break;
        }
      }
    }
    stack.push(numbers[i]);

    answer[i] = result;
  }

  return answer;
}

// 실패 코드 - 시간 초과
```
정확성: 82.6
합계: 82.6 / 100.0
```;
function solution(numbers) {
  return numbers.map((ele, idx) => {
    let behind_big_number = -1;
    for (let i = idx + 1; i < numbers.length; i++) {
      if (numbers[i] > ele) {
        behind_big_number = numbers[i];
        break;
      }
    }
    return behind_big_number;
  });
}

// 실패 코드 - 틀린 코드, O(N) 이지만 정확도가 떨어짐
```
정확성: 26.1
합계: 26.1 / 100.0
```;
function solution(numbers) {
  const answer = Array(numbers.length);
  answer[numbers.length - 1] = -1;
  for (let i = numbers.length - 2; i >= 0; i--) {
    let result = answer[i + 1];
    if (numbers[i] > numbers[i + 1]) {
      if (numbers[i] > answer[i + 1]) {
        result = -1;
      }
    }
    if (numbers[i] < numbers[i + 1]) {
      if (numbers[i + 1] < answer[i + 1] || answer[i + 1] === -1) {
        result = numbers[i + 1];
      }
    }
    answer[i] = result;
  }
  return answer;
}

// 테스트 케이스
```
parameters
[2, 3, 3, 5]
return
[3, 5, 5, -1]

parameters
[9, 1, 5, 3, 6, 2]
return
[-1, 5, 6, 6, -1, -1]

parameters
[2, 3, 4, 2, 5, 6, 2]
return
[3, 4, 5, 5, 6, -1, -1]

parameters
[8, 3, 4, 6, 3, 10, 9]
return
[10, 4, 6, 10, 10, -1, -1]

parameters
[9, 8, 6, 6, 5, 3, 5]
return
[-1, -1, -1, -1, -1, 5, -1]

parameters
[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4]
return
[2, 3, 4, 5, 6, 7, -1, 2, 3, 4, -1]

parameters
[10, 8, 11, 7, 13, 5, 15, 230]
return
[11, 11, 13, 13, 15, 15, 230, -1]

parameters
[1, 1, 1, 100]
return
[100, 100, 100, -1]

parameters
[8, 1, 2, 9]
return
[9, 2, 9, -1]
```;
