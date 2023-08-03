function solution(A, B) {
  let answer = -1;
  const length = A.length;
  for (let i = 0; i > -length; i--) {
    let AIdx = (i + length) % length;
    if (A[AIdx] === B[0]) {
      let correctCount = length;
      for (let j = 0; j < length; j++) {
        let compareIdx = (j + AIdx) % length;
        if (A[compareIdx] === B[j]) {
          correctCount -= 1;
        }
      }
      if (correctCount === 0) {
        answer = Math.abs(i);
        break;
      }
    }
  }
  return answer;
}

```
'평균 시간: 0.093ms'
'평균 메모리: 33.075MB'
'최고 시간: 0.14ms'
'최저 시간: 0.05ms'
'최고 메모리: 33.4MB'
'최저 메모리: 32.7MB'
'시간 표준 편차: 0.022'
'메모리 표준 편차: 11.833'
```;

function solution(A, B) {
  let answer = -1;
  const length = A.length;
  for (let i = 0; i > -length; i--) {
    let AIdx = (i + length) % length;
    if (A[AIdx] === B[0]) {
      let correctCount = length;
      for (let j = 0; j < length; j++) {
        let compareIdx = (j + AIdx) % length;
        if (A[compareIdx] === B[j]) {
          correctCount -= 1;
        } else {
          break;
        }
      }
      if (correctCount === 0) {
        answer = Math.abs(i);
        break;
      }
    }
  }
  return answer;
}

```
"평균 시간: 0.071ms";
"평균 메모리: 33.475MB";
"최고 시간: 0.13ms";
"최저 시간: 0.05ms";
"최고 메모리: 33.6MB";
"최저 메모리: 33.4MB";
"시간 표준 편차: 0.021";
"메모리 표준 편차: 11.886";
```;

function solution(A, B) {
  let answer = -1;
  const length = A.length;
  for (let i = 0; i > -length; i--) {
    let AIdx = (i + length) % length;
    if (A[AIdx] === B[0]) {
      let correctCount = length;
      B.split("").forEach((ele, idx) => {
        let compareIdx = (idx + AIdx) % length;
        if (A[compareIdx] === ele) {
          correctCount -= 1;
        } else {
          return false;
        }
      });
      if (correctCount === 0) {
        answer = Math.abs(i);
        break;
      }
    }
  }
  return answer;
}

```
  '평균 시간: 0.104ms'
  '평균 메모리: 33.450MB'
  '최고 시간: 0.19ms'
  '최저 시간: 0.09ms'
  '최고 메모리: 33.6MB'
  '최저 메모리: 33.4MB'
  '시간 표준 편차: 0.035'
  '메모리 표준 편차: 11.857'
  
  ```;
