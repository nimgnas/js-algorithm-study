function solution(n) {
  const numberArray = new Array(300).fill(null).map((ele, idx) => idx);
  const townNumberArray = numberArray.filter((ele) => {
    if (ele % 3 === 0 || (ele + "").indexOf("3") > -1) {
      return false;
    }
    return true;
  });
  return townNumberArray[n - 1];
}

// 우수 코드
function solution(n) {
  return [...Array(n * 3)]
    .map((_, i) => i + 1)
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}
