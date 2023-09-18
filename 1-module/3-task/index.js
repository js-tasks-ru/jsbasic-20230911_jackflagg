function ucFirst(str) {
  if (str === ''){
    return ''
  } else {
  const peremTwo = str[0].toUpperCase();
  const stringNew = str.replace(str[0], peremTwo)
  return stringNew;
    }
}
let peremOne = ucFirst('')
console.log(peremOne)
