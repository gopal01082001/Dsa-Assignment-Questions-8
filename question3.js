// 💡 **Question 3**
// Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.
// In one **step**, you can delete exactly one character in either string.
// **Example 1:**
// **Input:** word1 = "sea", word2 = "eat"
// **Output:** 2
// **Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".=
// Certainly! Here's a JavaScript implementation to find the minimum number of steps required to make two strings word1 and word2 the same:
// function minDistance(word1, word2) {
//   const m = word1.length;
//   const n = word2.length;
//   // Create a 2D array to store the minimum number of steps
//   const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

//   // Fill the first row
//   for (let j = 1; j <= n; j++) {
//     dp[0][j] = dp[0][j - 1] + 1;
//   }

//   // Fill the first column
//   for (let i = 1; i <= m; i++) {
//     dp[i][0] = dp[i - 1][0] + 1;
//   }
//   // Fill the rest of the table
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (word1[i - 1] === word2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1];
//       } else {
//         dp[i][j] = Math.min(
//           dp[i - 1][j] + 1,
//           dp[i][j - 1] + 1
//         );
//       }
//     }
//   }
//   return dp[m][n];
// }
// // Test case
// const word1 = "sea";
// const word2 = "eat";
// console.log(minDistance(word1, word2)); // Output: 2
// The approach uses dynamic programming to find the minimum number of steps required. We initialize a 2D array dp to store the minimum number of steps. The values in dp[i][j] represent the minimum number of steps required to make word1[0...i-1] and word2[0...j-1] the same.
// We fill the first row and the first column of dp by incrementing the previous cell's value by 1, as it represents deleting a character from either string.
// Then, we iterate through the remaining cells of dp. If the characters at the current indices are equal, we take the value from the diagonal cell (dp[i - 1][j - 1]), indicating no deletion is required. Otherwise, we consider two options: deleting a character from word1 and adding 1 (dp[i - 1][j] + 1), or deleting a character from word2 and adding 1 (dp[i][j - 1] + 1). We choose the minimum of these two options.
// Finally, the value in dp[m][n] represents the minimum number of steps required to make both strings the same, where m and n are the lengths of word1 and word2, respectively.
// In the provided example, the function returns 2 as the minimum number of steps required to make "sea" and "eat" the same.




