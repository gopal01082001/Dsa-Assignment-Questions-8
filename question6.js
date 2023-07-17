
// // 💡 **Question 6**

// // Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// // An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// // **Example 1:**

// // **Input:** s = "cbaebabacd", p = "abc"

// // **Output:** [0,6]

// // **Explanation:**

// // The substring with start index = 0 is "cba", which is an anagram of "abc".

// // The substring with start index = 6 is "bac", which is an anagram of "abc". */}
// function findAnagrams(s, p) {
//     const result = [];
//     const pFreq = new Array(26).fill(0); // Frequency array for characters in p
//     const windowFreq = new Array(26).fill(0); // Frequency array for characters in the sliding window
  
//     // Calculate the frequency of characters in p
//     for (let i = 0; i < p.length; i++) {
//       const charIndex = getCharIndex(p[i]);
//       pFreq[charIndex]++;
//     }
  
//     let left = 0; // Left pointer of the sliding window
  
//     // Slide the window from left to right
//     for (let right = 0; right < s.length; right++) {
//       const charIndex = getCharIndex(s[right]);
//       windowFreq[charIndex]++;
  
//       // Shrink the window if its size is greater than p's length
//       while (right - left + 1 > p.length) {
//         const leftCharIndex = getCharIndex(s[left]);
//         windowFreq[left
  
