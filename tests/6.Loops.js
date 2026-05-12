//Doing something repeatedly
//Optimize your code - Loops

//for
//while
//for..of loop
//for..in loop
//forEach() only for Arrays

//for loop
//for(initialExpression; condition; increment/Decrement expression){}

//Hello 1
//...
//Hello 10

//i -> Loop counter variable
//Iterations - 10
for (let i = 0; i <= 10; i = i + 1) { //i = 11
    console.log('hello', i)
}

for (let i = 1; i <= 3; i++) { //i = 11
    console.log('hello', i)
}



for (let i = 20; i > 0; i--) { //i = 11
    console.log("hello", i)
}

//For loop & Arrays

const animals = ['lion', 'tiger', 'bear']

// console.log(animals[0])
// console.log(animals[1])
// console.log(animals[2])

//Left to right, you are incrementing the index

for (let i = 0; i < 3; i++) {
    console.log(animals[i])
}


for (let i = 0; i < animals.length; i++) {
    console.log(animals[i])
}

// Arrays of Objects 

const students = [
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Piyush',
        grade: 100
    },
    {
        firstName: 'Ramesh',
        grade: 85
    },
]

for (let i = 0; i < students.length; i++) {
    console.log(students[i].firstName + " Scored " + students[i].grade)
    //console.log(students[i].grade)
    console.log(`${students[i].firstName} scored ${students[i].grade}`)
}

// Reverse the String

let word = 'auto123mation'
let reverse = ''
for (let i = word.length - 1; i >= 0; i--) {
    //console.log(word[i])
    reverse = reverse + word[i]
    //console.log(reverse)
}
console.log(reverse)

// Another methode to reverse the string
let word1='auto123mation'
let reverse1=word1.split("")
console.log(reverse1)
let reverse2= reverse1.reverse().join("")
console.log(reverse2)

console.log(word1.split("").reverse().join(""))
reverse()

//While loop

//for(initialExpression; condition; increment/Decrement expression){}

for (let i = 0; i < 10; i++) {
    console.log("hello", i)
}

let i = 0
while (i < 10) {
    console.log("hello", i)
    i++
}

// 0 - 9
//target    7(Fix)
//guess     4   ->  5   -> 3   -> 1     -> 7

const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

while (guess !== target) {
    console.log(`Target: ${target}, Guess: ${guess}`)
    guess = Math.floor(Math.random() * 10)
}

// while(true){
//     if(target === guess)    break
//     console.log(`Target: ${target}, Guess: ${guess}`)
//     guess = Math.floor(Math.random() * 10)
// }

console.log('You won!!')
console.log(`Target: ${target}, Guess: ${guess}`)

//For..of loop(Arrays or strings)

const animals1 = ['lion', 'tiger', 'bear']

// for (let i = 0; i < animals1.length; i = i + 2) {
//     console.log(animals1[i])
// }

for (const animal of animals1) {
    console.log(animal)
}

for (const char of "hello".split("").reverse().join("")) {
    console.log(char)
}

let colors = {
    red: '#red',
    yellow: '#yellow',
    blue: '#blue'
}

//TypeError: colors is not iterable
// for(const x of colors){
//     console.log(x)
// }

//Only for Objects
for (const x in colors) {
    console.log(x, colors[x])
}

async function checkPaymentStatus(orderId) {
  let status = "PENDING";

  while (status === "PENDING") {
    const response = await fetch(`/api/payment-status/${orderId}`);
    const data = await response.json();

    status = data.status;
    console.log("Checking payment status:", status);

    // wait 3 seconds before next check
    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  if (status === "SUCCESS") {
    console.log("Payment successful!");
  } else {
    console.log("Payment failed!");
  }
}
checkPaymentStatus()