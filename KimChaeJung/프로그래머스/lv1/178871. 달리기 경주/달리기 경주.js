// 정답
function solution(players, callings) {
  let answer = players.slice(0);
  let obj = {};

  players.forEach((ele, idx) => (obj[ele] = idx));

  callings.forEach((ele) => {
    const passNum = obj[ele];

    obj[ele] -= 1;
    obj[answer[passNum - 1]] += 1;

    [answer[passNum - 1], answer[passNum]] = [
      answer[passNum],
      answer[passNum - 1],
    ];
  });

  return answer;
}

// 실패 I
function solution(players, callings) {
  var answer = players.slice(0);
  callings.forEach((ele) => {
    const passer = answer.indexOf(ele);
    answer = answer
      .slice(0, passer - 1)
      .concat([ele, answer[passer - 1]])
      .concat(answer.slice(passer + 1));
  });

  return answer;
}

// 실패 II
function solution(players, callings) {
  let obj = {};
  let answer = Array(players.length).fill(null);

  players.forEach((ele, idx) => (obj[ele] = idx));

  callings.forEach((ele) => {
    const passNum = obj[ele];
    for (const key of Object.keys(obj)) {
      if (obj[key] === passNum - 1) {
        obj[key] += 1;
      }
    }
    obj[ele] -= 1;
  });

  for (const key of Object.keys(obj)) {
    answer[obj[key]] = key;
  }
  return answer;
}

// 실패 III
function solution(players, callings) {
  let answer = players.slice(0);

  callings.forEach((ele) => {
    const passNum = answer.indexOf(ele);
    [answer[passNum - 1], answer[passNum]] = [
      answer[passNum],
      answer[passNum - 1],
    ];
  });

  return answer;
}
