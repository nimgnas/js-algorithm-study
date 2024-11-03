function solution(fees, records) {
    let [기본시간, 기본요금, 단위시간, 단위요금] = fees
    
    const answer = {}
    records.forEach((record) => {
        let [시각, 차량번호, 내역] = record.split(" ")
        const [시, 분] = 시각.split(":")
        시각 = Number(시) * 60 + Number(분)
        
        if(내역 === "IN") {
            if(!answer[차량번호]) answer[차량번호] = {누적시간: 0}
            answer[차량번호] = {...answer[차량번호], 입차시각: 시각, 최근내역: "IN"}
        }
        
        if(내역 === "OUT") {
            const 누적시간 = 시각 - answer[차량번호]["입차시각"] + answer[차량번호]["누적시간"]
            answer[차량번호] = {
                ...answer[차량번호],
                누적시간: 누적시간,
                최근내역: "OUT"
            }
        }
    })
    
    let results = []
    for(const 차량번호 in answer) {
        let {입차시각, 누적시간, 최근내역} = answer[차량번호]
        
        if(최근내역 === "IN") {
            const 전체시간 = (60 * 23 + 59) - 입차시각 + 누적시간
            answer[차량번호] = {...answer[차량번호], 누적시간: 전체시간}
        }
        
        const 요금 = answer[차량번호]["누적시간"] > 기본시간 ? 기본요금 + Math.ceil((answer[차량번호]["누적시간"] - 기본시간) / 단위시간) * 단위요금 : 기본요금
        const result = [차량번호, 요금]
        results.push(result)
    }
    
    results = results.sort((a, b) => a[0] - b[0])
    return (results.map((v) => v[1]))
}