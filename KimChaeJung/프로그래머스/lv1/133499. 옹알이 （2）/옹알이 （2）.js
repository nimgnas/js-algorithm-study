const ONG_AL = ["aya", "ye", "woo", "ma"];

function isPossibleToPron(str) {
  if (str.length <= 1) return false;
  if (ONG_AL.includes(str)) return true;

  ONG_AL.forEach((basic, idx) => {
    str = str.replaceAll(basic, idx + "");
  });
  for (let i = 0; i < str.length; i++) {
    if ((i != 0) & (str[i - 1] === str[i])) return false;
    if (isNaN(str[i])) return false;
  }
  return true;
}

function solution(babbling) {
  var answer = 0;
  babbling.map((ele) => (answer += isPossibleToPron(ele) && 1));
  return answer;
}

// 우수 코드
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}
