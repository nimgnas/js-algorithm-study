function solution(babbling) {
  const baby = ["aya", "ye", "woo", "ma"];
  let cnt = 0;

  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];
      
    for (let j = 0; j < word.length / 2; j++) {
      for (let k = 0; k < 4; k++) word = word.replace(baby[k], k);
    }

    let flag = true;
    if (Number.isNaN(Number(word))) flag = false;
    for (let j = 1; j < word.length; j++) if (word[j - 1] === word[j]) flag = false;

    if (flag) cnt++;
  }

  return cnt;
}
