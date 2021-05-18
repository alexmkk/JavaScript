// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].

var decompressRLElist = function(nums) {
  let result = []    

  for (let i = 0; i < nums.length; i += 2) {
    result = [...result, ...Array(nums[i]).fill(nums[i+1])]
  }

  return result
};

console.log(decompressRLElist([1,1,2,3]))