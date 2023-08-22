function solution(number, limit, power) {
  let arr = []
    
  for (let i = 1; i <= number; i++) {
    const divisorArr = []
    for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) divisorArr.push(j)
    }
    
    const n = divisorArr.length
    for(let j = 0; j < n; j++) {
        if(i / divisorArr[j] !== divisorArr[j]) divisorArr.push(i / divisorArr[j])
    }
    
      arr.push(divisorArr.length)
  }

  return arr.reduce((a, c) => {
    if (c > limit) return a + power;
    else return a + c;
  }, 0);
}