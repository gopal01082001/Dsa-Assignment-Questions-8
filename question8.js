/* <aside>
💡 **Question 8**

Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

- For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

**Example 1:**

**Input:** s = "ab", goal = "ba"

**Output:** true

**Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
function buddyStrings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    const charCount = new Set();

    for (let i = 0; i < s.length; i++) {
      if (charCount.has(s[i])) {
        return true;
      }
      charCount.add(s[i]);
    }

    return false;
  }

  const indices = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      indices.push(i);
    }
  }

  return indices.length === 2 && s[indices[0]] === goal[indices[1]] && s[indices[1]] === goal[indices[0]];
}

// Test case
const s = "ab";
const goal = "ba";
console.log(buddyStrings(s, goal)); // Output: true
 */
