def solution(skill, skill_trees):
    answer = 0
    skillArr = list(skill)
    for ex in skill_trees:
        check = skillArr.copy()
        invalid = False
        for single in ex:
            if single in check:
                if single == check[0]:
                    check.pop(0)
                else:
                    invalid = True
                    break
        if len(check) == 0:
            answer += 1
        elif not invalid:
            answer += 1
                
    return answer