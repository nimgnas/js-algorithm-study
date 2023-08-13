function solution(cards1, cards2, goal) {
  var answer = "Yes";

  for (let i = 0; i < goal.length; i++) {
    if (cards1[0] !== goal[i] && cards2[0] !== goal[i]) return "No";
    if (cards1[0] === goal[i]) cards1.shift();
    if (cards2[0] === goal[i]) cards2.shift();
  }
  return answer;
}

// 코드추가
function solution(n, m, section) {
  let count = 0;
  const arr = Array.from(Array(n + 1).fill(null));

  section.forEach((el) => {
    arr[el] = 1;
  });

  section.forEach((el) => {
    if (arr[el]) {
      arr.fill(null, el, el + m);
      count++;
    }
  });
  return count;
}
