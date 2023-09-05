var longestConsecutive = function (nums) {
  //TODO: create length zero case
  //TODO: const a new set and a longestConsecutiveCount
  //TODO: loop through the new set const
  //TODO: check is the current num has a smaller value
  //TODO: if it doesn't than create a while loop that checks for bigger values by +1
  //TODO: save the current while loop count
  //TODO: compare the current longestConsecutiveCount with the while loop count
  //TODO: return the longestConsecutiveCount

  if (nums.length === 0) {
    return 0;
  }

  const NumsSet = new Set(nums);
  let longestConsecutiveCount = 0;

  for (const num of NumsSet) {
    if (!NumsSet.has(num - 1)) {
      let current = num;
      let count = 0;
      while (NumsSet.has(current)) {
        current++;
        count++;
        // console.log(count, current);
      }
      longestConsecutiveCount = Math.max(longestConsecutiveCount, count);
    }
  }

  return longestConsecutiveCount;
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
