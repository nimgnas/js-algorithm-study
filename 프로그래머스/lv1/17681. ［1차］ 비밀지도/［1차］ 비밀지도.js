function nToSecretMap(row, n)  {
    let secretMap = row.toString(2).split('').map(ele => ele === '0' ? ' ' : '#')
    return secretMap.join('').padStart(n, ' ')
}



function solution(n, arr1, arr2) {
    return arr1.map((row1, idx) => nToSecretMap(row1 | arr2[idx], n));
}