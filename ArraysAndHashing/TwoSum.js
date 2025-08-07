// === REQUIREMENTS ===
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// === FIRST ATTEMPT ===
// Pseudocode
// Record the integer of the popped number in a separate variable using findLastIndex.
// Pop a number from the array and add it to a variable.
// Use a for loop and add the number with each number in the array, returning the index from the variable and the index of the number used.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  while (true) {
    let compNum = nums.pop();
    let index = nums.length;
    for (let num = 0; num < nums.length; num++) {
      if (compNum + nums[num] === target) {
        const answerArr = [num, index];
        return answerArr;
      }
    }
  }
};

nums1 = [2, 7, 11, 15];
target1 = 9;
console.log(twoSum(nums1, target1));
nums2 = [3, 2, 4];
target2 = 6;
console.log(twoSum(nums2, target2));
nums3 = [3, 3];
target3 = 6;
console.log(twoSum(nums3, target3));

// =======
