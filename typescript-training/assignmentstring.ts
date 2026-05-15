// Assignment: Write a program to perform the following tasks:
// 1. Count the total number of words in the sentence.
// 2. Print the sentence words in reverse order.
// 3. Convert the first character of each word to uppercase and print original sentence

// String sentence = "Java programming is fun and challenging";

let sentence: string = "Java programming is fun and challenging";
let totalWords: number = sentence.split(" ").length;
console.log(totalWords)

//********************************************

let sentence1 = "Java programming is fun and challenging";
// Split sentence into words
let words = sentence1.split(" ");
// Reverse the words
let reversedSentence = words.reverse().join(" ");
console.log(reversedSentence);

// ***************************************************************

let sentence2= "java programming is fun and challenging";
// Convert first character of each word to uppercase
let updatedSentence = sentence2
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(updatedSentence);

//**************************************************************** */

// Assignment: Write a program to print * in triangle pattern
// 1. If I will pass int rows = 5 then it should print triangle with 5 Rows
// *
// **
// ***
// ****
// *****

let rows: number = 5;

for (let i = 1; i <= rows; i++) {
    let pattern: string = "";

    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }

    console.log(pattern);
}
