// * <aside>
// 💡 **Question 7**

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"

// **Output:** "aaabcbc"
// function decodeString(s) {
//   const stack = []; // Stack to store characters and counts
//   let currNum = 0; // Current number to track the count
//   let currStr = ""; // Current string to build the decoded string

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];

//     if (!isNaN(char)) {
//       currNum = currNum * 10 + parseInt(char);
//     } else if (char === "[") {
//       stack.push(currStr);
//       stack.push(currNum);
//       currStr = "";
//       currNum = 0;
//     } else if (char === "]") {
//       const num = stack.pop();
//       const prevStr = stack.pop();
//       currStr = prevStr + currStr.repeat(num);
//     } else {
//       currStr += char;
//     }
//   }

//   return currStr;
// }

// // Test case
// const s = "3[a]2[bc]";
// console.log(decodeString(s)); // Output: "aaabcbc"
