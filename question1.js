
// 💡 **Question 1**
// Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.
// **Example 1:**
// **Input:** s1 = "sea", s2 = "eat"
// **Output:** 231
// **Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
// Deleting "t" from "eat" adds 116 to the sum.
// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.
// Sure! Here's a JavaScript implementation to solve the problem:
// function minimumDeleteSum(s1, s2) {
//   const m = s1.length;
//   const n = s2.length;
//   // Create a 2D array to store the minimum sum of deleted characters
//   const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
//   // Fill the first row
//   for (let j = 1; j <= n; j++) {
//     dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
//   }
//   // Fill the first column
//   for (let i = 1; i <= m; i++) {
//     dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
//   }
//   // Fill the rest of the table
//   for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (s1[i - 1] === s2[j - 1]) {
//         dp[i][j] = dp[i - 1][j - 1];
//       } else {
//         dp[i][j] = Math.min(
//           dp[i - 1][j] + s1.charCodeAt(i - 1),
//           dp[i][j - 1] + s2.charCodeAt(j - 1)
//         );
//       }
//     }
//   }

//   return dp[m][n];
// }
// // Test case
// const s1 = "sea";
// const s2 = "eat";
// console.log(minimumDeleteSum(s1, s2)); // Output: 231
// The approach uses dynamic programming to find the minimum sum of deleted characters. We initialize a 2D array dp to store the minimum sums. The values in dp[i][j] represent the minimum sum of deleted characters to make s1[0...i-1] and s2[0...j-1] equal.
// We fill the first row and the first column of dp by adding the ASCII values of the characters in the corresponding strings.
// Then, we iterate through the remaining cells of dp. If the characters at the current indices are equal, we take the value from the diagonal cell (dp[i - 1][j - 1]), indicating no deletion is required. Otherwise, we consider two options: deleting the current character from s1 and adding its ASCII value (dp[i - 1][j] + s1.charCodeAt(i - 1)) or deleting the current character from s2 and adding its ASCII value (dp[i][j - 1] + s2.charCodeAt(j - 1)). We choose the minimum of these two options.
// Finally, the value in dp[m][n] represents the minimum sum of deleted characters to make both strings equal, where m and n are the lengths of s1 and s2, respectively.
// In the provided example, the function returns 231 as the lowest ASCII sum of deleted characters to make "sea" and "eat" equal.




