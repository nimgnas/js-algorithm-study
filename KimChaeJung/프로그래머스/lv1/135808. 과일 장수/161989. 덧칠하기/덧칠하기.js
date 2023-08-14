function solution(n, m, section) {
  var answer = 0;
  for (let i = n; i > 0; i--) {
    if (section.length === 0) break;
    if (section.indexOf(i) === -1) continue;
    const lastWall = section.pop();
    for (let j = lastWall; j > lastWall - m; j--) {
      if (section[section.length - 1] === j) {
        section.pop();
      }
    }
    answer += 1;
  }
  return answer;
}

// 코드 추가

function solution(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (var section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}
