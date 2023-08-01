function solution(numbers, k) {
  var answer = 0;

  for (let cnt = 1; cnt < k; cnt++) {
    const [a, b] = numbers;

    numbers.shift();
    numbers.shift();

    numbers.push(a);
    numbers.push(b);
  }

  return (answer = numbers[0]);
}

// 코드추가
function solution(numbers, k) {
  let idx = 0;
  for (let i = 1; i < k; i++) {
    idx += 2;
    if (idx > numbers.length) {
      idx %= numbers.length;
    }
  }
  return numbers[idx];
}
