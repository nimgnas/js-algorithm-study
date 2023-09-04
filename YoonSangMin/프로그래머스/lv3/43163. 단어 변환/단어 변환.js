function solution(begin, target, words) {
    let rst = []
    function DFS(begin, words, L) {
        if(begin === target) {
            rst.push(L)
            return
        }
        else {
          let ch = 0
          const arr = []
          for(let i = 0; i < words.length; i++) {
              for(let j = 0; j < words[i].length; j++) {
                  if(begin[j] !== words[i][j]) ch++
              }
              if(ch === 1) arr.push([words[i], i])
              ch = 0
          }
          for(let i = 0; i < arr.length; i++) {
              const nWords = [...words]
              nWords.splice(arr[i][1], 1)
              DFS(arr[i][0], nWords, L + 1)
              
          }
        }
    }
    DFS(begin, words, 0)
    
    return rst.length === 0 ? 0 : Math.min(...rst)
}