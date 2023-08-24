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
