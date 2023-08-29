function getMinClick(keymap, key) {
  let click = Infinity;
  for (const keys of keymap) {
    const index = keys.indexOf(key);
    click = index != -1 ? Math.min(index + 1, click) : click;
  }
  return click === Infinity ? -1 : click;
}

function solution(keymap, targets) {
  const minClickObj = {};
  return targets.map((ele) => {
    return [...ele].reduce((a, str, _, arr) => {
      let minClick = minClickObj[str];
      if (!minClick) minClick = getMinClick(keymap, str);
      if (minClick === -1) {
        arr.splice(1);
        return -1;
      } else {
        minClickObj[str] = minClick;
        return a + minClickObj[str];
      }
    }, 0);
  });
}
// 결과
```
'평균 시간: 1.670ms'
'평균 메모리: 34.126MB'
'최고 시간: 20.8ms'
'최저 시간: 0.12ms'
'최고 메모리: 36.9MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 81.651'
'메모리 표준 편차: 14.353'
```;

// 우수 코드
function solution(keymap, targets) {
  const answer = [];
  const map = {};
  for (const items of keymap) {
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }
  for (const items of targets) {
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}

// 결과
```
'평균 시간: 0.669ms'
'평균 메모리: 33.587MB'
'최고 시간: 1.7ms'
'최저 시간: 0.1ms'
'최고 메모리: 33.8MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 1.155'
'메모리 표준 편차: 7.056'
```;
