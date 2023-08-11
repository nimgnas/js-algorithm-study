function solution(rank, attendance) {
  const n = rank.length;

  const ableStu = rank.map((n, i) => {
    if (attendance[i]) return [n, i];
  });

  ableStu.sort((a, b) => a[0] - b[0]);

  return ableStu[0][1] * 10000 + ableStu[1][1] * 100 + ableStu[2][1];
}
