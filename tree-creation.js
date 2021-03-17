let pyramidValidator = (nodes) => {

  let result = false;

  if (!nodes) {
    return result;
  }

  let level = 1;
  let levelVals = 0;

  for (let index = 0; index < nodes; index ++) {
    if (levelVals === level) {
      level ++;
      levelVals = 0;
    }
    levelVals ++;
  }
  if (levelVals === level) {
    result = true;
    return result;
  } else {
    return result;
  }
}

let nodeOrganizer = (nodeArray) => {

  let levels = [];
  let level = 1;
  let levelVals = 0;

  for (let index = 0; index < nodeArray.length; index ++) {
    let node = {};
    node.val = nodeArray[index];
    node.left = null;
    node.right = null;
    if (levelVals === level) {
      level ++;
      levelVals = 0;
    }
    if (levelVals === 0) {
      levels.push([]);
    }
    levels[level - 1].push(node);
    levelVals ++;
  }

  return levels;
}