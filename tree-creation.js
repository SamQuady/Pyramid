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