function solution(s) {
  return s.split("").reduce((prev, ele) => {
    if (prev === "" && ele !== " ") return ele.toUpperCase();
    if (prev.at(-1) === " " && ele !== " ") return prev + ele.toUpperCase();
    return prev + ele.toLowerCase();
  }, "");
}
