 let fitbitData1 = {
    steps : 308727,
   why : 1826,
   oh : loveyou 
}

console.log(fitbitData1)

//Standalone Objects
//There is no indexing
// const fitbitData = {
//     totalSteps: 308727,
//     totalFloors: 1826,
//     totalMiles: 211.7
// }

const fitbitData = {
    totalSteps      : 308727,
    totalFloors     : 1826,
    totalMiles      : 211.7,
    45              : 'forty five',
    'full name1'      : 'Piyush Gupta'
}

//fitbitData."full name1"

console.log(fitbitData.totalFloors)
console.log(fitbitData['totalFloors'])

const data = {a: 1, b:2, c: 3}

let colors = {
    red: '#red',
    yellow: '#yellow',
    blue: '#blue'
}

let mysterycolor = 'yellow'

// console.log(colors.red)
// console.log(colors["red"])
//console.log(colors[yellow])  // Reference Error As yellow is not defined to any variable,data type is undefined

//console.log(colors.mysterycolor)    //undefined

//Square bracket syntax support dynamic expressions
console.log(colors['yellow'])
console.log(colors[mysterycolor])

const userReviews = {}
userReviews.queenBee = 4.0
userReviews['mrSmith'] = 3.5

console.log(userReviews)

//Nested Arrays & Objects

const student = {
    firstName: 'David',
    lastName : 'Jones',
    strengths: ['Music', 'Cricket'],
    exams: {
        midterm: 92,
        final: 85
    }
}   //777

const student1 = student     //888

console.log(student === student1)

// let x = 10 + 5

let x, y
x = y = 25 - 10 - 5

//Explicit Type Conversion/Type casting

let num = "123"     //string
let converted = Number(num) 

console.log(converted)

let n = 456
let str = String(n)
console.log(str)

//Type coercion(Automatic)
//String(2)
console.log("5" + 2)

console.log("5" - 2)

console.log("I am " + 23 + ' years old')