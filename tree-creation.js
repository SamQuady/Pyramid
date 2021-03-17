let treeBuilder = (nodeArray) => {

  if (!nodeArray.length) {
    return 'No Values Given!'
  }

  let levels = [];
  let level = 1;
  let levelVals = 0;

  for (let index = 0; index < nodeArray.length; index ++) {
    if (levelVals === 0) {
      levels.push([]);
    }
    levels[level - 1].push(nodeArray[index]);
    levelVals ++;
    if (levelVals === level) {
      level ++;
      levelVals = 0;
    }
  }
}