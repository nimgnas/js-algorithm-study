function solution(s) {
  var answer = 0;

  const map = new Map();
  map.set("etc", 0);

  let targetIdx = 0;
  for (let i = 0; i < s.length; i++) {
    if (targetIdx === i) map.set(s[targetIdx], 0);

    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    else map.set("etc", map.get("etc") + 1);

    let same = true;
    let val = map.get(s[targetIdx]);

    for (const [key, value] of map) {
      if (val !== value) same = false;
    }

    if (same) {
      answer++;
      targetIdx = i + 1;
      map.clear();
      map.set("etc", 0);
    }
  }

  if (map.size >= 2) answer++;

  return answer;
}
