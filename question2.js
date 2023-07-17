// 💡 **Question 2**
// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.
// The following rules define a **valid** string:
// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
// **Example 1:**
// **Input:** s = "()"
// **Output:**
// Certainly! Here's a JavaScript implementation to determine if a string s is valid according to the given rules:
// function isValidString(s) {
//   let low = 0; // Lower bound of valid parentheses count
//   let high = 0; // Upper bound of valid parentheses count
//   // Iterate through the string from left to right
//   for (let i = 0; i < s.length; i++) {
//     // Increment lower bound for '(' and '*'
//     if (s[i] === '(' || s[i] === '*') {
//       low++;
//     } else {
//       // Decrement lower bound for ')'
//       low--;
//     }
//     // Decrement upper bound for '(' and '*'
//     if (s[i] === ')') {
//       high--;
//     } else {
//       // Increment upper bound for ')' and '*'
//       high++;
//     }
//     // If upper bound becomes negative, it means there are too many ')'s without corresponding '(' or '*'
//     if (high < 0) {
//       return false;
//     }
//     // Keep the lower bound at a minimum of 0
//     low = Math.max(low, 0);
//   }
//   // The string is valid if the lower bound is 0 (all parentheses are matched)
//   return low === 0;
// }
// // Test case
// const s = "()";
// console.log(isValidString(s)); // Output: true
// The approach involves maintaining lower and upper bounds of the count of valid parentheses. We iterate through the string s from left to right. For each character, we update the lower and upper bounds based on the following rules:
// If the character is '(' or '*', we increment the lower bound since it can potentially match a corresponding ')' or be treated as an empty string.
// If the character is ')', we decrement the lower bound since it can match a preceding '('.
// If the character is ')' or '*', we decrement the upper bound since it can potentially match a preceding '(' or be treated as an empty string.
// If the upper bound becomes negative at any point, it means there are too many ')'s without corresponding '(' or '*', and the string is not valid.
// After iterating through the entire string, we check if the lower bound is 0. If it is, all parentheses have been matched, and the string is valid.
// In the provided example, the function returns true since the string "()" satisfies all the rules for a valid string.




