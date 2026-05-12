function grumpus(){
    console.log("Line 1")
    console.log("Line 2")
    console.log("Line 3")
}

grumpus()

//Functin declaration
function greet(nickName){
    console.log(nickName)
}

greet()

function multiply(a, b){
    console.log(a * b)
}

multiply(4)

const scream = 'hello'.toUpperCase()

function square(n){
    return n ** 2
    return "Hello"
    console.log('All done')     //Unreachable code.
}

const result = square(4)
console.log(result)

function isPurple(color){
    if(color === 'purple'){
        return true
    } else {
        return false
    }
}

console.log(isPurple('purple'))

//Function Scope

function helpMe(){
    let msg = "Hey there"
    console.log(msg)
}

helpMe()
console.log(msg)

function lol(){
    let person = 'Tom'
    const age = 45
    var color = 'teal'
}

function changeColor(){
    let person = 'Mary'
    const age = 67
    var color = 'cyan'
}

lol()
console.log(person)

// const name1 = "piyush"
// const name1 = "harry"

let bird = 'manadarin duck'

function birdWatch(){
    //let bird = 'golden pheasant'
    bird = "parrot"
    console.log(bird)
}

birdWatch()
console.log(bird)

//Block Scope

let radius = 8

if(radius > 0){
    const PI = 3.14
    let circle = 2 * PI * radius
}

console.log(radius)     //8
//console.log(PI)         //Reference Error.
console.log(circle)     //Reference Error.

if(true){
    var animal = 'eel'
}
console.log(animal)

//There is no block scope for var variable.
//for, while, for.of, for..in

//Function expression

//Syntax1 - Function declaration
function grumpus(){
    console.log("Line 1")
    console.log("Line 2")
    console.log("Line 3")
}

//Syntax2 - Function expression
//A function without a name is called an anonymous function.
const square = function (num){
    return num * num
}

console.log(square(3))

//Callback functions

function callTwice(func){
    func()
    func()
}

function laugh(){
    console.log('HHAAAAAAAHHHAAAAAA')
}

callTwice(34)

//setTimeout() function - Async
//Built-in function. It will run a certain block of code after a
//certain number of milliseconds. 5000 milliseconds is 5 seconds.

//setTimeout(func, delay)

//Anonymous function - A function without a name

