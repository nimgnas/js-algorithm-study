function solution(genres, plays) {
    const arr = genres.map((v, i) => [v, plays[i], i])
    arr.sort((a, b) => b[1] - a[1])
    const obj = {}
    
    for(const [gen, cnt] of arr) {
        if(obj[gen]) obj[gen] = obj[gen] + cnt
        else obj[gen] = cnt
    }
    
    const rank = []
    for(const x in obj) {
        rank.push([x, obj[x]])
    }
    
    rank.sort((a, b) => b[1] - a[1])
    
    const rst = []
    let cnt = 0
    for(let i = 0; i < rank.length; i++) {
        const target = rank[i][0]
        cnt = 0
        
        for(let j = 0; j < arr.length; j++) {
            if(arr[j][0] === target) {
                rst.push(arr[j])
                cnt++
                
                if(cnt === 2) j = arr.length - 1
                
            }
        }
    }
    return rst.map((v) => v[2])
}