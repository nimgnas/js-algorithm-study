function solution(sizes) {
  let maxFirst = 0;
  let maxSecond = 0;
  sizes.forEach((ele) => {
    const [first, second] = ele;
    maxFirst = Math.max(maxFirst, Math.max(first, second));
    maxSecond = Math.max(maxSecond, Math.min(first, second));
  });
  return maxFirst * maxSecond;
}

// 우수 코드

function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
