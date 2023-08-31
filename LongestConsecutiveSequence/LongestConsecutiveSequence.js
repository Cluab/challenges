var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longestConsecutiveSet = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestConsecutiveSet = Math.max(longestConsecutiveSet, currentStreak);
    }
  }

  return longestConsecutiveSet;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
