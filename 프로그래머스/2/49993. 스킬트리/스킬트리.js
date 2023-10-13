function solution(skill, skill_trees) {
    var answer = 0;
    skill_trees.forEach(ele => {
        let isValid = true
        let targetTree = skill.split('')
        ele.split('').forEach(testSkill => {
            if (targetTree[0] === testSkill){
                targetTree.shift();
            } else if (targetTree.includes(testSkill)){
                isValid = false
                return false
            }
        })
        if (isValid) answer += 1
    })
    return answer;
}