function solution(skill, skill_trees) {
    const isCorrect = (target, test) => {
        const targetArr = target.split('')
        for (const ele of test.split('')){
            if (targetArr.length === 0) return true
            if (!targetArr.includes(ele)) continue
            if (ele === targetArr.shift())  continue
            return false
        }
        return true
    }
    return skill_trees.filter(ele => isCorrect(skill, ele)).length;
}