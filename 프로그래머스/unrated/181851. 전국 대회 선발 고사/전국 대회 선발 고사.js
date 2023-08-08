function solution(rank, attendance) {
    const CAL_CONSTANT = [10000, 100, 1]
    return  rank
    .map((ele, idx) =>  attendance[idx] ? [idx, ele] : [idx, 0])
    .filter(ele => ele[1] != 0)
    .sort((a, b) =>  a[1] - b[1]).slice(0, 3)
    .reduce((a, b, idx) =>  a + b[0]*(CAL_CONSTANT[idx]), 0)
}