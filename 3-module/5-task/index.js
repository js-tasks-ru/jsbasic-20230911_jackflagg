function getMinMax(str) {
  let arr = str.split(' ').map(item => parseFloat(item)).filter(item => !isNaN(item));
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return {max, min};
}
