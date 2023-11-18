function solution(s) {
    let arr = s.split(' ');
    let answer = arr.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    return answer.join(' ');
}