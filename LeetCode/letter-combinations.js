var letterCombinations = function(digits) {
  const nums = {
    "2": ['a', 'b', 'c'],
    "3": ['d', 'e', 'f'],
    "4": ['g', 'h', 'i'],
    "5": ['j', 'k', 'l'],
    "6": ['m', 'n', 'o'],
    "7": ['p', 'q', 'r', 's'],
    "8": ['t', 'u', 'v'],
    "9": ['w', 'x', 'y', 'z']
  }

  if (digits.length === 0) return []
  if (digits.length === 1) return nums[digits]

  digits.forEach()

};

console.log(letterCombinations(""))