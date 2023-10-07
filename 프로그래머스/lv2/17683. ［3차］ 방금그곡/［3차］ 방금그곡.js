function solution(m, musicinfos) {
    const arr = ["C#", "D#", "F#", "G#", "A#"]
    const rst = []
    
    arr.forEach((v, i) => m = m.replaceAll(v, i))
    
    for(let i = 0; i < musicinfos.length; i++) {
        let [st, ed, name, score] = musicinfos[i].split(",")
        
        arr.forEach((v, i) => score = score.replaceAll(v, i))
        
        st = new Date(1995, 10, 1, st.split(":")[0], st.split(":")[1])
        ed = new Date(1995, 10, 1, ed.split(":")[0], ed.split(":")[1])
        
        const diffMSec = ed.getTime() - st.getTime();
        const diffMin = diffMSec / (60 * 1000);

        let fScore = ""
        for(let j = 0; j < diffMin; j++) {
            fScore += score[j % score.length]
        }
        
        if(fScore.includes(m)) rst.push([name, diffMin])
    }
    
    return rst.length > 0 ? rst.sort((a, b) => b[1] - a[1])[0][0] : "(None)"
}