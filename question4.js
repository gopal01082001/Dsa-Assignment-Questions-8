// 💡 **Question 4**
// You need to construct a binary tree from a string consisting of parenthesis and integers.
// The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
// You always start to construct the **left** child node of the parent first if it exists.
// Sure! Here's a JavaScript implementation to construct a binary tree from a string consisting of parentheses and integers:
// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// function str2tree(s) {
//   if (s === "") {
//     return null;
//   }
//   let numEnd = 0;
//   while (numEnd < s.length && !isNaN(parseInt(s[numEnd])) || s[numEnd] === '-') {
//     numEnd++;
//   }
//   const root = new TreeNode(parseInt(s.substring(0, numEnd)));
//   if (numEnd < s.length) {
//     let balance = 0;
//     let i = numEnd;
//     while (i < s.length) {
//       if (s[i] === "(") {
//         balance++;
//       } else if (s[i] === ")") {
//         balance--;
//       }

//       if (balance === 0) {
//         break;
//       }
//       i++;
//     }
//     root.left = str2tree(s.substring(numEnd + 1, i));
//     root.right = str2tree(s.substring(i + 2, s.length - 1));
//   }
//   return root;
// }
// // Test case
// const s = "4(2(3)(1))(6(5))";
// const tree = str2tree(s);
// console.log(tree);
// The approach uses recursion to construct the binary tree from the string. We define a TreeNode class to represent each node of the tree, with val, left, and right properties.
// The str2tree function takes the input string s and constructs the binary tree using the following steps:
// If the input string is empty, return null.
// Find the end index of the integer at the beginning of the string. This is done by iterating through the string until a character that is not a digit or a '-' sign is encountered.
// Create a new TreeNode with the integer value parsed from the substring of s starting from index 0 and ending at numEnd.If there are characters remaining in the string (after the integer), find the closing parenthesis that corresponds to the opening parenthesis after the integer. This is done by keeping track of the balance of parentheses. When the balance becomes 0, it means we have found the corresponding closing parenthesis.
// Recursively call str2tree to construct the left child of the current node. The substring for the left child starts from numEnd + 1 and ends at the index before the closing parenthesis.
// Recursively call str2tree to construct the right child of the current node. The substring for the right child starts from i + 2 (the index after the closing parenthesis) and ends at the second-to-last index of the string.
// Return the root node of the constructed binary tree.
// In the provided example, the function constructs a binary tree from the string "4(2(3)(1))(6(5))" and logs the resulting tree object to the console.




