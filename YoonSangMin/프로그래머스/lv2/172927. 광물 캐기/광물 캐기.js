function solution(picks, minerals) {
    const picksStr = ["dia", "iron", "stone"]
    const picksLength = picks.reduce((acc, pick) => {
        return acc += pick
    }, 0)
    
    // 돌곡괭이로 캤을 경우의 5개 광석 단위 피로도 배열
    let stonePirodo = []
    
    // 돌 곡괭이로 캤을 경우 5개 광석 단위 피로도 계산
    for(let i = 0; i < minerals.length; i+=5) {
        const mineralset = minerals.slice(i, i + 5)
        
        pirodo = mineralset.reduce((acc, mineral) => {
            if(mineral === "diamond") return acc += 25
            if(mineral === "iron") return acc += 5
            if(mineral === "stone") return acc += 1
        }, 0)
        
        stonePirodo.push([i, pirodo])
        // [ [ 0, 125 ], [ 5, 25 ], [ 10, 25 ] ]
    }
    
    // 피로도가 많이 사용되는 순서대로 정렬
    stonePirodo = stonePirodo.sort((a, b) => b[1] - a[1])
    
    // 피로도가 많이 사용되는 순서대로 좋은 곡괭이를 할당
    // [ [ 0, 125, 1 ], [ 5, 25, 2 ], [ 10, 25, 4 ] ]
    stonePirodo = stonePirodo.map((v) => {
        
        // 곡괭이갯수가 minerals 5개단위보다 작을경우 처리
        if(stonePirodo.length > picksLength) {
            if(v[0] === (stonePirodo.length - 1) * 5) {
                return [...v, 4]
            }
        }
        
        for(let i = 0; i < picks.length; i++) {
            if(picks[i] !== 0) {
                picks[i] = picks[i] - 1
                return [...v, i]
            }
            
            if(picks[i] === 0 && i === picks.length - 1) {
                return [...v, 4]
            }
        }
    })
  
    
    let piro = 0
    let pick = ""
    for(let i = 0; i < minerals.length; i++) {
        // 곡괭이를 교체할때 stonePirodo 의 0번째 index의 값과 i가 같은 경우를 찾는다
        // 찾은 값이 undefined가 아니면서
        // 찾은 값([ 0, 125, 1 ]) 의 3번째 index의 곡괭이를 사용한다
        if(i % 5 === 0) {
            const stonePirodoIdx = stonePirodo.findIndex((v) => {
                if(v !== undefined) {
                    return v[0] === i
                }
            })
            
            if(stonePirodoIdx >= 0) {
                pick = picksStr[stonePirodo[stonePirodoIdx][2]]
            }
            if(stonePirodoIdx === -1) pick = null
        }
        
        if(pick === "dia") piro += 1
        if(pick === "iron") {
            if(minerals[i] === "diamond") piro += 5
            if(minerals[i] === "iron") piro += 1
            if(minerals[i] === "stone") piro += 1
        }
        if(pick === "stone") {
            if(minerals[i] === "diamond") piro += 25
            if(minerals[i] === "iron") piro += 5
            if(minerals[i] === "stone") piro += 1
        }
    }
    
    return piro
}
