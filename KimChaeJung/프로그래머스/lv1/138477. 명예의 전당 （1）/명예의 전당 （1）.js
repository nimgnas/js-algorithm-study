function solution(k, score) {
  var top_k = [];
  return score.reduce((a, b) => {
    top_k.push(b);
    top_k.sort((a, b) => a - b);
    if (top_k.length > k) top_k.shift();
    a.push(top_k[0]);
    return a;
  }, []);
}

// 결과
```
'평균 시간: 1.131ms'
'평균 메모리: 34.496MB'
'최고 시간: 3.91ms'
'최저 시간: 0.07ms'
'최고 메모리: 36.7MB'
'최저 메모리: 33.5MB'
'시간 표준 편차: 7.475'
'메모리 표준 편차: 13.486'
```;
