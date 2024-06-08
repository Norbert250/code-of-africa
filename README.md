# COA TASKFORCE TAKE HOME CHALLENGES


This repository contains a photo gallery application and two JavaScript challenges. Contributions are welcomed!

## Photo Gallery Application
To implement an interactive photo gallery, I used the provided Figma designs as my starting point. Starting with an HTML boilerplate, I included a section tag in the body. Using Flexbox, I displayed the elements as columns to meet the required design. No CSS frameworks or JavaScript were utilized.

### How to Run the Application
1. **Online**: Visit [this website](https://strong-pony-4bb58d.netlify.app/).
2. **Locally**:
   - Clone this repository.
   - Through your terminal, navigate to the cloned directory and then to `Photo Gallery`.
   - Open `index.html`. You can either right-click and select "Show Preview" or simply double-click on `index.html` outside your terminal to interact with the gallery.

## Subarray Sum Challenge
### Problem
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return `true` if such a subarray exists, otherwise return `false`.

### Approach
I used the two-pointers method. The idea is to maintain pointers that point to the first and last value of a subarray. On each turn, the left pointer moves one step to the right, and the right pointer moves to the right as long as the resulting subarray sum is at most the target. If the sum becomes exactly the target, a solution has been found.

### How to Run the Subarray Sum Algorithm
1. Install Node.js.
2. Create a JavaScript file with any name (e.g., `subarraySum.js`).
3. Through the terminal of your preferred code editor, navigate to the directory of your file.
4. Run the command `node <filename>`, replacing `<filename>` with the name of your file.

## String Transformation Challenge
### Problem
Given a string, transform it based on the following rules:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

### Approach
Using if and else statements, I solved this problem:
- To reverse a string, I looped backward through its characters while adding one character at a time to an empty string.
- For the ASCII code transformation, I checked the equivalent ASCII code for each character and added it to the empty string followed by a space.

### How to Run the String Transformation Algorithm
1. Install Node.js.
2. Create a JavaScript file with any name (e.g., `stringTransform.js`).
3. Through the terminal of your preferred code editor, navigate to the directory of your file.
4. Run the command `node <filename>`, replacing `<filename>` with the name of your file.
