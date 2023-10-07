function solution(n, k) { 
    const arr = ["0P0", "P0", "0P"]
    let ntok = n.toString(k)
    const stack = []

    let tmp = ""
    for(let i = 0; i < ntok.length; i++) {
        if(ntok[i] === "0") {
            if(tmp) stack.push(tmp)
            stack.push("0")
            tmp = ""
        } else tmp += ntok[i]
    }
    stack.push(tmp)

    let primeArr = stack.filter((v) => isPrime(Number(v)))
    primeArr.forEach((v) => ntok = ntok.replace(v, "P"))
    
    
    let cnt = 0
    for(let i = 0; i < ntok.length; i++) {
        if(ntok[i] === "P") {
            let arr = [ntok[i - 1],"P",ntok[i + 1]]
            for(let j = 0; j < arr.length; j++) {
                if(arr[j] !== "0" && arr[j] !== "P") arr[j] = ""
            }
            
            for(const x of ["0P0", "P0", "0P", "P"]) {
                if(arr.includes(x)) {
                    cnt ++
                    break
                }
            }
        }
    }

    
    return cnt
}

function isPrime(num) {
  if(num === 1 || num === 0) return false;

  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if(num % i === 0) return false;
  }
      
  return true;
}
