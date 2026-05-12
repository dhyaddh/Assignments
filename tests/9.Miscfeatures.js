//Default Parameters

function multiply(x, y){
    return x * y
}

console.log(multiply(4, 5 ,3))
console.log(multiply(4))

// All the default parameters need to come at the end of the parameter list.
//You can't make the first parameter default and have non-default parameters afterwards.

//Spread operator - ...
//Copy an array.

const nums = [9, 3, 2, 8]

// console.log(Math.max(9, 3, 2, 8))
// console.log(Math.min(9, 3, 2, 8))

console.log(Math.max(nums))     //NaN
console.log(Math.max(...nums))     //NaN


const nums1 = [1, 2, 3]
const nums2 = [3, 5, 6]

const newArray = [...nums1, ...nums2, 7, 8, 9]

console.log(newArray)

//Set - 

const numbers = [1, 2, 3, 2, 4, 4, 3, 5]
const uniques = [...new Set(numbers)]

console.log(uniques)

//REST parameters(...)
//Remaining parameters

function sum(a, b, c){
    return a + b + c
}

console.log(sum(4, 5))
console.log(sum(4, 5, 6))

function sumAll(...nums){
  let total=0
  for (const num of nums){
    total += num
    }
    return total
}
console.log(sumAll(4,6,7,7))


function sumAll(...nums){
    // let total = 0
    // for(const num of nums) total += num

    return nums.reduce((total, currVal) => {
        return total + currVal
    })

    //return total
}

console.log(sumAll(2,3))
console.log(sumAll(2,3,4))

function fullName(first, last, ...titles){
    console.log(first)
    console.log(last)
    console.log(titles)
}

fullName('Piyush', 'Gupta', 'val1', 'val2', 'val3')

//Destructuring (Modern JS syntax)
//1. Array destructuring
//2. Object destructuring

const raceResults = [
    'Ramesh',
    'Shweta',
    'Shivani',
    'Ravi',
    'Pramod',
    'Prajna'
]

const gold = raceResults[0]
const silver = raceResults[1]
 const bronze = raceResults[2]

// const [gold, ,silver, ,bronze] = raceResults
// console.log(gold)
// console.log(silver)
// console.log(bronze)

const [fastest, ...everyoneElse] = raceResults

console.log(fastest)
console.log(everyoneElse)

//Object
//we will destructure values of objects into standalone variables.

const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'This is a title'
}

// const first = runner.first
// const last = runner.last
// const country = runner.country

const {first, country} = runner
console.log(first, country)

const apiResponse = {
    token : 'dasdasdasdasdasd.yyy.zzzz'
}

// const {token} = apiResponse
const token = apiResponse.token

//Computed Properties
//It is just an improvement to Object literal syntax where we can
//add a property with a dynamic key.

const role = "host"
const person = 'Jools Hooland'

const team = {
    [role]: person,
    [1 + 6 + 9]: 'sixteen'
}

console.log(team)

//Adding methods to Objects
//Math
const math1 = {
    sum: function(x, y){
        return x + y
    }
}

const math = {
    sum(x, y){
        return x + y
    }
}

//Difference between (Functions/Methods): Functions are standalone activity where as Function defined
//under Objects are called as Methods. Like in above example is of Method.


console.log(math.sum(3, 4))

function sumAll(...nums){
    let total=0
    for (let n of nums){
        total =total + n
        }
        return total
    } console.log(sumAll(4,5,6,7,8,9))