function checkSpam(str) {
  const lowStr = str.toLowerCase();
  return (lowStr.indexOf("1xbet") != -1 || lowStr.indexOf("xxx") != -1);
}

console.log(checkSpam('1XbeT now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))