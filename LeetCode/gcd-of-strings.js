var gcdOfStrings = function(str1, str2) {
  const [smallerString, largerString] = [str1, str2].sort((a,b) => a.length - b.length);
  
  for (let i = smallerString.length; i > 0; i--) {
    const testString = smallerString.slice(0, i)
    const correctSmaller = !smallerString.split(testString).join('').length
    const correctLarger = !largerString.split(testString).join('').length

    if (correctSmaller && correctLarger) return testString
  }

  return ''
}

console.log(gcdOfStrings("ABABABAB", "ABAB")) // ABAB
console.log(gcdOfStrings("ABCABC", "ABC")) // ABC
console.log(gcdOfStrings("ABABAB", "ABAB")) // AB
console.log(gcdOfStrings("LEET", "CODE")) // ""
console.log(gcdOfStrings("ABCDEF", "ABC")) // ""