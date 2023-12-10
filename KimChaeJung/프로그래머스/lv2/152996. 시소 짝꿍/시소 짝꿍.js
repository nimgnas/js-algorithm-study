function solution(weights) {
  let answer = 0;
  let obj = {};
  const RATIO = [1 / 2, 2 / 3, 3 / 4, 4 / 3, 3 / 2, 2];

  weights.forEach((ele) => {
    if (obj[ele]) {
      obj[ele] += 1;
    } else {
      obj[ele] = 1;
    }
  });
  const keys = Object.keys(obj);
  for (let targetIdx = 0; targetIdx < keys.length; targetIdx++) {
    const [key, value] = [keys[targetIdx], obj[keys[targetIdx]]];
    if (value > 1) {
      answer += (value * (value - 1)) / 2;
    }
    for (
      let compareIdx = targetIdx + 1;
      compareIdx < keys.length;
      compareIdx++
    ) {
      const [cKey, cValue] = [keys[compareIdx], obj[keys[compareIdx]]];
      for (let i = 0; i < RATIO.length; i++) {
        if (key * RATIO[i] == cKey) {
          answer += value * cValue;
          break;
        }
      }
    }
  }
  return answer;
}

// 다른 사람 풀이
function solution(weights) {
  weights.sort((a, b) => b - a);
  const dict = {};
  return weights.reduce((cnt, w) => {
    if (dict[w]) cnt += dict[w]; // 1:1
    if (dict[(w * 4) / 3]) cnt += dict[(w * 4) / 3]; // 3:4
    if (dict[(w * 3) / 2]) cnt += dict[(w * 3) / 2]; // 2:3
    if (dict[w * 2]) cnt += dict[w * 2]; // 2:4
    // 사전 갱신해주기
    dict[w] = (dict[w] || 0) + 1;
    return cnt;
  }, 0);
}
