
console.log("Hello World")

//Primitive Types
"Piyush Gupta"
8000
true

/*
1. Number
2. String
3. Boolean
4. null
5. undefined
Symbol and BigInt
*/

//Number
50
7
3.3434
0.99
-11223

//JS has a precision of 16 decimal places.

//% is Remainder or modulus operator
4/2
4 / 2
//4 % 2   -> 0

//Exponentiation operator
console.log(2 ** 3)

console.log(Math.pow(2, 3))

//JS is case sensitive
//NaN - Special value in JS - Not a Number
//Infinity
//-Infinity

//Variables in Javascript - let and const
//ES6 or ES2015 - 
//Never use the var keyword.

//int num = 10  //4 bytes

//let someVariableName = value
//Use lower camel casing

let counter = 0     //Assignment. Happens from RHS -> LHS
counter = 1     //variable change is allowed
counter = 'Shrikanth'

// counter = "Piyush"
console.log(counter)

let fullName = "Piyush"

//Create constants
const hens = 4
hens = 5        //TypeError: Assignment to constant variable.

//Lower camel casing
const birthYear = 1990

const PI = 3.1415
const DAYSINWEEK = 7

//Snake casing - Python
//let windSpeed = 76

let wind_speed = 76
wind_speed += 5     //wind_speed = wind_speed + 5
console.log(wind_speed)
wind_speed--        //wind_speed = wind_speed - 1
console.log(wind_speed)

//JS will ignore them.
let num = 1_000_000_000_000 //Trillion

let creditCard = 1234_5678_9123_4567
console.log(creditCard)

//Try to use const as much as possible.

//Booleans

//is, has
let isLoggedIn = true
let isGameOver = false
const isWaterWet = true

//Variables can change their types in JS
//Dynamic typing
let numOfDonuts = 12
numOfDonuts = false

//Intellisense
numOfDonuts = "hello"
console.log(numOfDonuts)

//Binary(2) operator
1 + 2

//Unary(1) operator
counter++
++counter

//Variable naming rules

/*
1. Variable names can not start with a number. Example - 3years.
2. Variable names can only contain letters, numbers, underscores or the $ sign.
3. We can not use reserved Javascript keywords as the variable names for example “new”, “function”.
4. Never use an uppercase letter for creating a variable.
5. Make sure variable names are descriptive.
*/

//Strings
"Piyush"

//Single quotes, double quotes, backtick(below esc key)
let firstName = 'Ziggy'
let msg = "Hi 'there"
//let badString = "this is "wrong"

//typeof operator

//String concatenation
let lastName = "Can'ary"
console.log(lastName)

//One time use string
let str = firstName + lastName
console.log(firstName + lastName)

//Garbage Collection(GC)

//Strings are immutable(that can be changed)

let firstName1 = 'Ziggy'
firstName1[0] = 'z'     //Ignored
console.log(firstName1)

console.log("hi" + 1)

//String indexing
//C H   I   C   K   E   N
//0 1   2   3   4   5   6(7 - 1)

//In programming, the indexing starts from 0

//Properties
//Methods

//1. toUpperCase()
console.log("hello")
let msg1 = "hello".toUpperCase()
console.log(msg1)
//Syntax - string.someMethodName()

//2. trim()
//It removes starting and ending white spaces in a string.

let greeting = ' hello there '  //GC will delete it
greeting = greeting.trim()      //'hello there' 
console.log(greeting.trim())

//Method chaining
//Chain multiple methods together
let color = "      purple    "
console.log(color)
console.log(color.trim().toUpperCase())

//3. indexOf() - It tells where in a string a given string occurs.
let tvShow = 'catdog'       //Literal
console.log(tvShow.indexOf("cat"))  //0
console.log(tvShow.indexOf("cit"))  //-1

console.log(tvShow.indexOf("z"))    //-1    -> Not present

console.log("baseball".indexOf("ball"))

console.log("baseball".indexOf("bay"))

console.log("baseball".indexOf("b"))
console.log("Baseball".indexOf("b"))
console.log("Baseball".indexOf("cricket"))

//4. slice() - It slices an existing string and it gives you a piece of it.
let str1 = "superlongstring"    //super

console.log(str1.slice(0, 5))

let sport = "Baseball"
console.log(sport.slice(5, 8))

//5. replace(replaceWhat, replaceWith) - It replaces the first occurance

console.log("baseball is entertaining".replace("entertaining", "ok"))

console.log('ha ha ha'.replace('ha', 'hee'))

//6. includes() - The includes() method is used to check if a string contains another string.
// It returns true if the text is found, and false if it’s not.
let text = "JavaScript is fun"

console.log(text.includes('Script'))        //true
console.log(text.includes('script'))        //false

//7. split() method - The split() method is used to break a string into smaller parts
// and put those parts into an array.

let text1 = "Hello World"
console.log(text1.split(" "))

let fruits = "apple,banana,grapes"
console.log(fruits.split(","))


let name1 = 'aJavascript'
console.log(name1.split("a"))    //""

//In short: Use split() when you want to break a string into pieces and work with them individually.


const age = "5" + "4"   //"54"

//Coercion
//1 + 2   => 3
//"1" + "2" => Concatenation(joining strings)   12
//"5" + "4" => 54
//"5" - 4   => 1
console.log("piyush" - 100)

"pecan pie"[7]  //i

console.log('PUP'[4])   //undefined

//strings are immutable
let song = "london calling"
song.toUpperCase()
let song1 = "LONDON CALLING"

console.log(song)

let park = "Yellowstone"
const index = park.indexOf('stone')
console.log(index)

let yell = 'GO AWAY!!'
let index1 = yell.indexOf('!')
console.log(index1)

//'GARBAGE!     -> RBAGE!   -> RAGE!
console.log('GARBAGE!'.slice(2).replace("B", ""))

'he said "hello'
"Hello 'World"

//Escape characters
"Hello \"World"

"Hello 'World"
`Hello 'World"`

console.log(4 == '4')


let string = "Hello World"

console.log(string[0])
console.log(string[12])
console.log(string[string.length-1])


let Arr=[1,-1,2,-2,-2,3,3,5,6,4,7,3]
let newArr=[...new Set(Arr)]
console.log(newArr)
newArr.sort((a,b)=> a- b)
console.log(newArr)
thirdhighest= newArr[newArr.length-3]
thirdLowest=newArr[3]
console.log(thirdhighest)
console.log(thirdLowest)