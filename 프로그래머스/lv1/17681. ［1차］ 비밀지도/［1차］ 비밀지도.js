function nToSecretMap(row, n)  {
    let secretMap = row.toString(2).split('').map(ele => ele === '0' ? ' ' : '#')
    while (secretMap.length < n){
        secretMap.unshift(' ')
    }
    return secretMap.join('')
}



function solution(n, arr1, arr2) {
    var answer = [];
    for (let i = 0; i < n; i++ ){
        answer.push(nToSecretMap(arr1[i] | arr2[i], n))
    }
    return answer;
}