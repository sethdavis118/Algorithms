// === REQUIREMENTS ===
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// === FIRST ATTEMPT ===
// Pseudocode
// Sort s alphabetically
// Sort t alphabetically
// compare both arrays with === and return true or false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sArr = s.split("");
  const tArr = t.split("");
  sArr.sort();
  tArr.sort();
  const sSorted = sArr.toString();
  const tSorted = tArr.toString();
  if (sSorted === tSorted) {
    return true;
  } else {
    return false;
  }
};

const s1 = "anagram";
const t1 = "nagaram";
console.log(isAnagram(s1, t1));
const s2 = "rat";
const t2 = "car";
console.log(isAnagram(s2, t2));

// =======
