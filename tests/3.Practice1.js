//String Template Literals. - natural way of creating a string

const firstName = 'Piyush'
const job = 'Trainer'
const birthYear = 1991
const year = 2037

//Java's syntax
const str1 = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
console.log(str1)

//JS way
const str2 = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(str2)

console.log(Math.pow(4,2))

console.log (Math.abs(-100));





 const str = "Hello";

for (let i = 0; i < str.length; i++) {
  console.log(`Character: ${str[i]}, Index: ${i}`);
}

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); 

const string = "Hello World";

for (let i = 0; i < string.length; i++) {
  if (string[i] !== " ") {
    console.log(string[i]);
  } 
}