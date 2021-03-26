function getMaxSubSum(arr) {
  let maxSum = 0,
      partialSum = 0
  
      for (let item of arr) {
        partialSum += item
        maxSum = Math.max(maxSum, partialSum)
        if (partialSum < 0) partialSum = 0
      }

    return maxSum
}

console.log( getMaxSubSum([-1, 2, 3, -9, 11]) )