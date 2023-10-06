function solution(genres, plays) {
    var answer = [];
    const musicInfo = {}
    for (let i = 0; i < genres.length; i++){
        if ( genres[i] in musicInfo ) {
            musicInfo[genres[i]].push([i, plays[i]])
        } else {
            musicInfo[genres[i]] = [[i, plays[i]]]
        }
    }
    const totalPlay = {}
    for (const [key, value] of Object.entries(musicInfo)){
        value.sort((a, b) => b[1] - a[1])
        const total = value.reduce((a, b) => a + b[1], 0)
        musicInfo[key] = value
        totalPlay[key] = total
    }
    
    const sortedPlay = Object.entries(totalPlay)
                        .sort(([, a], [, b]) => b - a)
                        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    
    Object.keys(sortedPlay).forEach(ele => {
        musicInfo[ele].slice(0, 2).forEach(selected => {
            answer.push(selected[0])
        })
    })
    return answer;
}