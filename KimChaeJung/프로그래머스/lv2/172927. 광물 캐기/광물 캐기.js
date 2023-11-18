function solution(picks, minerals) {
  const totalPicks = picks.reduce((prev, ele) => prev + ele, 0);
  const mineralObjList = [];

  while (minerals.length > 0) {
    const slicedMinerals = { diamond: 0, iron: 0, stone: 0 };

    for (let i = 0; i < 5; i++) {
      if (minerals.length == 0) break;
      const firstMineral = minerals.shift();
      slicedMinerals[firstMineral] += 1;
    }

    mineralObjList.push(slicedMinerals);

    if (mineralObjList.length === totalPicks) break;
  }

  mineralObjList.sort((a, b) => {
    const { diamond: ADia, iron: AIron, stone: AStone } = a;
    const { diamond: BDia, iron: BIron, stone: BStone } = b;
    if (ADia !== BDia) return BDia - ADia;
    if (AIron !== BIron) return BIron - AIron;
    return BStone - AStone;
  });

  const mineToFatigue = (pick, diamond, iron, stone) => {
    if (pick === "diamond") return diamond + iron + stone;
    if (pick === "iron") return diamond * 5 + iron + stone;
    if (pick === "stone") return diamond * 25 + iron * 5 + stone;
  };

  return mineralObjList.reduce((prev, curr) => {
    const { diamond, iron, stone } = curr;
    const [diaPick, ironPick, stonePick] = picks;
    let currFatigue = 0;
    if (diaPick > 0) {
      currFatigue = mineToFatigue("diamond", diamond, iron, stone);
      picks[0] -= 1;
    } else if (ironPick > 0) {
      currFatigue = mineToFatigue("iron", diamond, iron, stone);
      picks[1] -= 1;
    } else {
      currFatigue = mineToFatigue("stone", diamond, iron, stone);
      picks[2] -= 1;
    }

    return prev + currFatigue;
  }, 0);
}
