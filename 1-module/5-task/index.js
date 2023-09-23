function truncate(str, maxlength) {
  if (str.length > maxlength) {
    const otrezok = str.substr(maxlength - 1)
    return str.replace(otrezok, '…')
  } else {
    return str
  }
}
