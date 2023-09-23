function solution(record) {
    let resultObj = []
    let uid_name_obj = {}
    record.forEach(ele => {
        const splitted = ele.split(' ')
        if (splitted[0] === 'Leave'){
            let obj = {uid: splitted[1], action: '님이 나갔습니다.'}
            resultObj.push(obj)
        } else if (splitted[0] === 'Enter'){
            uid_name_obj[splitted[1]] = splitted[2]
            let obj = {uid: splitted[1], action: '님이 들어왔습니다.'}
            resultObj.push(obj)
        } else {
            uid_name_obj[splitted[1]] = splitted[2]
        }
    })
    return resultObj.map(ele => {
        const {uid, action} = ele
        return `${uid_name_obj[uid]}${action}`
    });
}