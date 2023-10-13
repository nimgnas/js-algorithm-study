function solution(skill, skill_trees) {
  const isCorrect = (target, test) => {
    const targetArr = target.split("");
    for (const ele of test.split("")) {
      if (targetArr.length === 0) return true;
      if (!targetArr.includes(ele)) continue;
      if (ele === targetArr.shift()) continue;
      return false;
    }
    return true;
  };
  return skill_trees.filter((ele) => isCorrect(skill, ele)).length;
}

// 결과
```
'평균 시간: 0.186ms'
'평균 메모리: 33.436MB'
'최고 시간: 0.24ms'
'최저 시간: 0.09ms'
'최고 메모리: 33.5MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.025'
'메모리 표준 편차: 8.935'
```;

function solution(skill, skill_trees) {
  var answer = 0;
  skill_trees.forEach((ele) => {
    let isValid = true;
    let targetTree = skill.split("");
    ele.split("").forEach((testSkill) => {
      if (targetTree[0] === testSkill) {
        targetTree.shift();
      } else if (targetTree.includes(testSkill)) {
        isValid = false;
        return false;
      }
    });
    if (isValid) answer += 1;
  });
  return answer;
}

// 결과
```
'평균 시간: 0.144ms'
'평균 메모리: 33.493MB'
'최고 시간: 0.22ms'
'최저 시간: 0.08ms'
'최고 메모리: 33.6MB'
'최저 메모리: 33.4MB'
'시간 표준 편차: 0.028'
'메모리 표준 편차: 8.972'
```;
