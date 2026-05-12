// let counter1 = 0
// counter1 = 100
// //counter1 = "piyush"

// function greet1(nickName: string){
//     console.log(nickName)
// }

// greet1("Piyush")


// //Type Annotation Basics
// // let myAwesomeVariable = 'Awesome!!'
// // myAwesomeVariable = 10
// let myAwesomeVariable: string = 'Awesome!!'
// // myAwesomeVariable = 100
// myAwesomeVariable = "Hey There"

// let myNumber: number = 42
// myNumber = 60

// let gameOver: boolean = false

// //int number = 10;

// //Type Inference in Typescript
// let x = 27
// // x = "Twenty seven"

// //The Any type
// let myData: any = "COmplicated data"
// myData = 10
// myData = true

// //1. Delayed initialization
// let count: number = 5       //Initialized immediately

// let name1: string
// name1 = "Piyush"

// //2. Implicit Any
// let data1       //no type, no value. Switching of the type checkin
// data1 = 5
// data1 = "ramesh"
// data1 = true

// // function greet(){
// //     console.log("Welcome to Typescript")
// // }

// // greet()

// function greetUser(name: string){
//     console.log(`Hello ${name}`)
//     return ""
// }

// // greetUser(10)
// // greetUser("Piyush")
// // greetUser("Rahul")

// //public static void main()
// //int number
// function add(a: number, b: number): number{
//     return a + b
// }

// let sum = add(5, 10)
// console.log(sum)

// function greetUserDefault(name: string = "Guest"){
//     console.log("hello", name)
// }

// greetUserDefault()

// //Optional Parameter
// function printMessage(msg?: string){
//     if(msg){
//         console.log("message", msg)
//     } else {
//         console.log("No message provided")
//     }
// }

// printMessage("Hello")
// printMessage()

// function getResult(flag: boolean): number | string{
//     if(flag){
//         return 100
//     } else {
//         return "failed"
//     }
// }

// // function printName(name: {first: string, last: string}){
// //     console.log(`${name.first} ${name.last}`)
// // }

// // function greetPerson(person: {first: string, last: string}){
// //     console.log(`${person.first} ${person.last}`)
// // }

// //Type Alias
// //A Type Alias is just a way to give a name to a type so we can reuse it.

// type Name = {
//     first: string,
//     last: string
// }

// function printName(name: Name){
//     console.log(`${name.first} ${name.last}`)
// }

// function greetPerson(person: Name){
//     console.log(`${person.first} ${person.last}`)
// }

// type ID = string | number

// let userID: ID

// userID = 100
// userID = "123456"

// type Point = {
//     x: number,
//     y: number,
//     z?: number
// }

// const myPoint: Point = {x: 1, y: 2}

// type User = {
//     readonly id: number,
//     username: string
// }

// const user: User = {
//     id: 12837,
//     username: "piyushgupta"
// }

// console.log(user.id)

// // user.id = 10000      //Not allowed

// //Array types
// let names: string[] = ["hello", "world"]
// let ages: number[] = [24, 32, 45, 36]

// let names1: Array<string> = ["hello", "world"]
// let ages1: Array<number> = [24, 32, 45, 36]

// // ages[0] = "dasdasd"

// let arr: (number | string)[] = ['hello', 10]

// function callTwice1(func: () => void){
//     func()
//     func()
// }

// function laugh1(){
//     console.log('HHAAAAAAAHHHAAAAAA')
// }


