function solution(n, m, section) {
  var answer = 0;

  const wall = Array.from({ length: n }, () => 1);
  section.forEach((v) => (wall[v - 1] = 0));
  
  for (let st = 0; st <= n - m; st++) { 
    let sum = 0;
    let ed = st  
        
    if (wall[st] === 0 || st === n - m) {
      sum = 0  
      while (ed - st < m) {
        sum += wall[ed];
        if (wall[ed] === 0) wall[ed] = 1;
        ed++  
         
      }
      if(sum < m) answer ++  
    }
  }

  return answer;
}

