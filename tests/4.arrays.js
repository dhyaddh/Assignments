
//Relationship in data + Positioning(indexing)

const name1 = "sachin"
const name2 = "aamir"
const name3 = "abid"
//...
//...
//...

//Arrays - 

let students = []

//Array literal syntax
new Array(1, 2, 3, 4, 5)

//Both the strings and arrays are indexed

let colors = ['red', 'orange', 'yellow', 'green']

console.log(colors.length)

console.log(colors[0])      //'red'
console.log(colors[4])      //undefined
console.log(colors[colors.length - 1])      //undefined
console.log(colors[colors.length - 2])

//Strings are immutable
let name4 = "Piyush"
name4[0]= "p"           //This line is ignored

//Arrays are mutable/changed

colors[0] = "rad"
colors[2] = "black"
console.log(colors)

//4 arrays - push(), pop(), shift() and unshift()

//push() - Adding something on the right side/end of the array
//pop() - Remove something from the right side/end of the array
//unshift() - Adding something on the left side/beginning of the array
//shift() - Remove something from the left side/beginning of the array

let colors1 = ['red', 'orange', 'yellow', 'green']

colors1.push("purple", "white")
colors1.push("cyan")
console.log(colors1.pop())
colors1.pop()
colors1.unshift("magenta")
console.log(colors1)

//['magenta', 'red', 'orange', 'yellow', 'green', 'purple']

//More array methods
//concat() - Merge arrays
//includes() - Same like string includes()
//indexOf() - Same like string indexOf()
//join() - Creates one string by joining all the array elements
//reverse() - Simply reverses the array
//slice() - Copy portion of an array.
//splice() - Remove/replace array elements from somewhere in the middle
//sort() - Sorts an array.

let fruits = ['apple', 'banana']
let veggies = ['tomato', 'potato', 'brinjal']

console.log(veggies.concat(fruits))
console.log(fruits)
console.log(veggies)

let array1 = [1, 2, 3]
console.log(array1.includes(4))     //true

//We are looking for an exact match
let pets = ['cat', 'dog', 'bat']
console.log(pets.includes('cat'))    //false

let beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.indexOf('bisonsing'))
console.log(beasts.indexOf('bison', 2))

//reverse()

let array2 = ['one', 'two', 'three']
array2.reverse()
console.log(array2)

//Creates one string by joining all the array elements
//Comma is default separator
let elements = ['Fire', 'Air', 'Water']
console.log(elements.join())            //Fire,Air,Water
console.log(elements.join(''))          //FireAirWater
console.log(elements.join('-'))         //Fire-Air-Water

//slice() - 
let animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
//Creates a copy of an array.

console.log(animals.slice(2))           //[ 'camel', 'duck', 'elephant' ]
console.log(animals.slice(2, 4))        //[ 'camel', 'duck' ]

//splice() - Add/Remove/replace array elements from somewhere in the middle
let animals1 = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

//splice(startIdx, deleteCount, itemsToInsert)

//Req1 - At index 1, delete 0 items and insert "Octopus"
animals1.splice(1, 0, "Octopus")
//console.log(animals1)       //['shark', 'Octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']

//Req2 - At index 5, delete 2 items.
animals1.splice(5, 2)     //['shark', 'Octopus', 'salmon', 'whale', 'bear']
console.log(animals1)

//Req3 - At index 3, delete 2 items and replace them with "orca" and "grizzly"
animals1.splice(3, 2, "orca", "grizzly")
console.log(animals1)

//sort() - 
let months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months)

let array3 = [1, 30, 4, 21, 10000]
array3.sort()
console.log(array3)     //[ 1, 10000, 21, 30, 4 ]

//Introduction to reference types
//Primitive Type - numbers, strings, booleans
//Reference Type - Arrays, JS objects

let fruit = "orange"

//Declaration - reserving some space in memory
let color = fruit       //Assignment happens from right to left   

fruit = "watermelon"    //Change the current value of fruits(whatever it is) to watermelon

console.log({fruit, color})
console.log(fruit === color)

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
// let arr2 = arr1

console.log(arr1 === arr2)

arr1.push(4)
console.log(arr1)
console.log(arr2)


const arr3 = [1, 2, 3]

// arr3.push(4, 5, 6)
// console.log(arr3)
// arr3.pop()
// console.log(arr3)

arr3 = [10, 11, 12]
console.log(arr3)



