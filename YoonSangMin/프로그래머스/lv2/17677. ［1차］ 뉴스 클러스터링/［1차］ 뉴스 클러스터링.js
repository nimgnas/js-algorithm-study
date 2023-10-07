function solution(str1, str2) {
    str1 = str1.replace(/[^a-zA-Z]/g, " ")
    str2 = str2.replace(/[^a-zA-Z]/g, " ")
    
    const obj = {}
    const arr1 = []
    for(let i = 0; i < str1.length - 1; i++) {
        const sum = (str1[i] + str1[i + 1]).trim().toLowerCase()
        
        if(sum.length >= 2) {
            arr1.push(sum)
            if(obj[sum]) obj[sum] = obj[sum] + 1
            else obj[sum] = 1
        }
    }
    
    const arr2 = []
    for(let i = 0; i < str2.length - 1; i++) {
        const sum = (str2[i] + str2[i + 1]).trim().toLowerCase()
        
        if(sum.length >= 2) {
            arr2.push(sum)
            if(obj[sum]) obj[sum] = obj[sum] + 1
            else obj[sum] = 1
        }        
    }
    
    let union = 0
    let intersection = 0
    
    for(x in obj) {
        if(obj[x] === 1) union++
        
        if(obj[x] >= 2) { 
            const [unionCnt, interSectionCnt] = count(x)
            union += unionCnt
            intersection += interSectionCnt
        } 
    }
    const rst = parseInt((intersection / union) * 65536)
    return Object.keys(obj).length === 0 ? 65536 : rst
    
    function count(str) {
        let aCnt = 0
        let bCnt = 0
        
        arr1.forEach((v) => {if(str === v) aCnt++})
        arr2.forEach((v) => {if(str === v) bCnt++})
        
        return [Math.max(aCnt, bCnt), Math.min(aCnt, bCnt)]
    }
    
}

