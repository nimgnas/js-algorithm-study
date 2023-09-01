function solution(n, words) {
    let round = 1;
    for (let i = 1; i < words.length; i++){
        round += (i % n === 0) ? 1 : 0;
        const b = i - (round-1) * n + 1;
        const before = words[i-1];
        const current = words[i];
        if (!current.startsWith(before[before.length-1])) {
            return [b, round]
        }
        if (words.indexOf(current) != i) {
            return [b, round]
        }
    }
    return [0, 0];
}