module.exports = function check(str, bracketsConfig) {
  function check(str, bracketsConfig) {
    let arr = bracketsConfig.map(e => e.join(''))
    for (let i = str.length; str.length;) {
      for (let value of arr) str = str.replace(value, '')
      if ((i === str.length) && str.length) return false
      i = str.length
    }
    return true
  }
}
