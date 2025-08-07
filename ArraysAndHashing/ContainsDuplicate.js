// === REQUIREMENTS ===
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false
// Explanation:
// All elements are distinct.

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// === FIRST ATTEMPT ===
// nums = [1, 2, 3, 4]
// containsDuplicate {
//     create object
//     loop through nums and check if that value exists
//      if it exists return true
//      if it doesn't then add it to object
//      when the loop is finished, return false.
// }

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let obj = {};
  for (const num of nums) {
    if (obj[num] in obj) {
      return true;
    }
    obj[num] = num;
  }

  return false;
};
const nums1 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1));
const nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums2));
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums3));

// =======
