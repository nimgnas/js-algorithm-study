function solution(chicken) {
  var answer = 0;

  while (chicken >= 10) {
    const na = chicken % 10;
    chicken = Math.floor(chicken / 10);
    answer += chicken;

    chicken = na + chicken;
  }
  return answer;
}
