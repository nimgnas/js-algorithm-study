const getPlayTime = (start, end) => {
    const [sHour, sMinute] = start.split(':')
    const [eHour, eMinute] = end.split(':')
    return ( eHour*60 + eMinute*1 ) - ( sHour*60 + sMinute*1 ) 
}

const getNoteList = (strNote) => {
    const list = []
    for (let i = 0; i < strNote.length; i++){
        if (strNote[i+1] === '#'){
            list.push(strNote[i]+strNote[i+1])
            i++
        } else {
            list.push(strNote[i])
        }
    }
    return list
}

const isMIncluded = (m, noteList) =>{
    const mList = getNoteList(m)
    for (let i = 0; i < noteList.length; i++){
        if ( noteList[i] === mList[0] ){
            let isIncluded = true
            for (let j = 1; j < mList.length; j++){
                if ( noteList[i+j] !== mList[j] ){
                    isIncluded = false
                    break
                }
            }
            if (isIncluded) {
                return true
            }   
        }
    }
    return false
}

function solution(m, musicinfos) {
    var answerTitle = '(None)';
    
    let answerObj = {}
    
    musicinfos.sort((a, b) => {
        const [aHour, aMinute] = a.split(',')[0].split(':')
        const [bHour, bMinute] = b.split(',')[0].split(':')
        return ( aHour*60 + aMinute*1 ) - ( bHour*60 + bMinute*1 ) 
    })
    
    let musicData = []
    musicinfos.forEach(ele => {
        let [start, end, title, note] = ele.split(',')
        const playTime = getPlayTime(start, end)
        let noteList = getNoteList(note)
        if (noteList.length < playTime){
            note = note.repeat(Math.ceil(playTime / note.length))
            noteList = Array(Math.ceil(playTime / noteList.length)).fill(noteList).flat()
        }
        noteList = noteList.slice(0, playTime)
        musicData.push({ playTime:playTime, title:title, note: noteList })
    })
    
    for (const ele of musicData) {
        const {playTime, title, note} = ele
        if (Object.keys(answerObj).length === 0){
            if (isMIncluded(m, note)) answerObj = ele
            else continue
        } else {
            if (playTime > answerObj.playTime){
                if (isMIncluded(m, note)) answerObj = ele
            } else continue
        }
    }
    
    if (Object.keys(answerObj).length !== 0){
        answerTitle = answerObj.title
    }
    
    return answerTitle;
}