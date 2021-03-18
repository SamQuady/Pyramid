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


let treeBuilder = (nodes) => {

  let root = nodes[0][0];

  for (let index = 1; index < nodes.length; index ++) {
    let pointerIndex = 0;
    let level = nodes[index];
    let levelPointer = 0;
    while (levelPointer < level.length - 1) {
      let pointer = nodes[index - 1][pointerIndex];
      pointer.left = level[levelPointer];
      pointer.right = level[levelPointer + 1];
      pointerIndex ++;
      levelPointer ++;
    }
  }
  return root;
}

let pathFinder = (pyramid, target) => {

  let result = '';

  let helper = (node, route, product) => {
    product = product * node.val;
    if (product > target) {return;}
    if (product === target && !node.left && !node.right) {
      result = route;
      return result;
    }
    if (product <= target && node.left && node.right) {
      helper(node.left, route + 'L', product);
      helper(node.right, route + 'R', product);
    }
  }

  helper(pyramid, '', 1);

  return result;
}

module.exports = {
  pyramidValidator,
  nodeOrganizer,
  treeBuilder,
  pathFinder
}