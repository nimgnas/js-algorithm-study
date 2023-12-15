function timeToMin(hhmm) {
  const [hh, mm] = hhmm.split(":");
  return hh * 60 + +mm;
}

function solution(plans) {
  let answer = [];

  // 전처리
  plans = plans.map((ele) => {
    const [name, start, playtime] = ele;
    return [name, timeToMin(start), +playtime];
  });
  // 정렬
  plans.sort((a, b) => b[1] - a[1]);

  let paused = [];
  let currTime = plans.at(-1)[1];

  while (plans.length > 0) {
    const [nowName, nowStart, nowPlaytime] = plans.pop();
    const nextStart = plans.length > 0 ? plans.at(-1)[1] : 20000;
    if (currTime + nowPlaytime > nextStart) {
      paused.push([nowName, nowStart, nowPlaytime - (nextStart - currTime)]);
      currTime = nextStart;
    } else {
      answer.push(nowName);
      currTime += nowPlaytime;
      while (currTime < nextStart) {
        if (paused.length === 0) {
          currTime = nextStart;
          break;
        }
        const [pausedName, pausedStart, pausedPlaytime] = paused.pop();
        if (currTime + pausedPlaytime <= nextStart) {
          currTime += pausedPlaytime;
          answer.push(pausedName);
        } else {
          const spendTime = nextStart - currTime;
          currTime += spendTime;
          paused.push([pausedName, pausedStart, pausedPlaytime - spendTime]);
        }
      }
    }
  }

  while (paused.length > 0) {
    answer.push(paused.pop()[0]);
  }

  return answer;
}
