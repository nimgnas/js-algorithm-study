function solution(bandage, health, attacks) {
    const maxCount = attacks.at(-1)[0]
    const maxHealth = health
    let attackCount = 0
    
    let bandCount = 0
    for(let count = 1; count <= maxCount; count++) {
        if(health > maxHealth) health = maxHealth
        
        // 피해 받음
        if(count === attacks[attackCount][0]) {
            health -= attacks[attackCount][1]
            bandCount = 0
            attackCount++
            
            // 죽음
            if(health <= 0) return -1
            continue
        }
        
        bandCount++
        // 초당 체력 회복
        health += bandage[1]

        // 추가 회복
        if(bandCount === bandage[0]) {
            health += bandage[2]  
            bandCount = 0
            continue
        }
    }
    
    return health
}