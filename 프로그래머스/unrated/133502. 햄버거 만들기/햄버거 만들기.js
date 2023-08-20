function solution(ingredient) {
  let answer = 0;
  let left_stack = [];
  let right_stack = ingredient.slice(0).reverse();
  while (right_stack.length > 0) {
    const rlidx = right_stack.length - 1;
    if (right_stack[rlidx] === 3 && right_stack[rlidx - 1] === 1) {
      const last_idx = left_stack.length - 1;
      if (left_stack[last_idx] === 2 && left_stack[last_idx - 1] === 1) {
        left_stack.pop();
        left_stack.pop();
        right_stack.pop();
        right_stack.pop();
        answer += 1;
        continue;
      }
    }
    left_stack.push(right_stack.pop());
  }
  return answer;
}

// 결과
```
'평균 시간: 14.455ms'
'평균 메모리: 49.628MB'
'최고 시간: 57.9ms'
'최저 시간: 0.05ms'
'최고 메모리: 93.6MB'
'최저 메모리: 33MB'
'시간 표준 편차: 1159.372'
'메모리 표준 편차: 1465.848'
```;

function solution(ingredient) {
  let answer = 0;
  let left_stack = [];
  let right_stack = ingredient.slice(0).reverse();
  while (right_stack.length > 0) {
    if (right_stack[right_stack.length - 1] === 3) {
      const sliced_right = right_stack.slice(-2).reverse().join("");
      const sliced_left = left_stack.slice(-2).join("");
      if (sliced_left + sliced_right === "1231") {
        left_stack.pop();
        left_stack.pop();
        right_stack.pop();
        right_stack.pop();
        answer += 1;
        continue;
      }
    }
    left_stack.push(right_stack.pop());
  }
  return answer;
}

// 결과
```
'평균 시간: 52.716ms'
'평균 메모리: 55.633MB'
'최고 시간: 181ms'
'최저 시간: 0.05ms'
'최고 메모리: 112MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 15813.694'
'메모리 표준 편차: 2519.609'

```;

// 최다 좋아요 수 코드
function solution(ingredient) {
  let stk = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    stk.push(ingredient[i]);
    if (
      stk[stk.length - 1] === 1 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 4] === 1
    ) {
      count++;
      stk.splice(-4);
    }
  }
  return count;
}
// 결과
```
'평균 시간: 36.737ms'
'평균 메모리: 48.511MB'
'최고 시간: 498ms'
'최저 시간: 0.04ms'
'최고 메모리: 90.9MB'
'최저 메모리: 33.3MB'
'시간 표준 편차: 53381.016'
'메모리 표준 편차: 1276.513'
```;
