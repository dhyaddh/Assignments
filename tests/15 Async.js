console.log("Start")
console.log("Processing")
console.log("End")

/*
Synchronous code in JavaScript executes line by line, in order, meaning each statement
 must complete before the next one starts.
It is blocking in nature
*/

console.log("Start")

// Simulating a time-consuming task
function fetchData() {
    let start = Date.now();         
    while (Date.now() - start < 3000) {} // Blocks execution for 3 seconds
    return "Data loaded";
}

let data = fetchData();
console.log(data);

console.log("End");

//Synchronous code is also called blocking code because it blocks further execution
// until the current task is completed.

//1. It blocks the execution
//2. This can cause performance issues 

//Asynchronous code


console.log("Start");

//async - Not blocking
setTimeout(() => {
    console.log("Async task finished!");
}, 2000);

console.log("End");

//How does JS handle async code
//1. Callbacks
//2. PRomises
//3. Async/await - looks like synchronous but runs async



//Callback Hell & The Pyramid of Doom

console.log("Start");

setTimeout(() => {
    console.log("Step 1")
    setTimeout(() => {
        console.log("Step 2")
        setTimeout(() => {
            console.log("Step 3")
            setTimeout(() => {
                console.log("Step 4")
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

console.log("End");



//Sequential setTimeout() methods
console.log("Start");

setTimeout(() => console.log("Step 1"), 1000);
setTimeout(() => console.log("Step 2"), 1000);
setTimeout(() => console.log("Step 3"), 1000);
setTimeout(() => console.log("Step 4"), 1000);

console.log("End");


//Pending - 
//fulfilled
//rejected

//It waits for a task to finish and then either it succeeds(fulfilled) or fails(rejected)

//Promise Example
function delay(message, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve(); // Call resolve when the task is done
        }, time);
    });
}

console.log("Start");

delay("Step 1", 1000)
    .then(()=> delay("Step 2", 1000))
    .then(()=> delay("Step 3", 1000))
    .then(()=> delay("Step 4", 1000))
    .then(()=> console.log("All Steps are done"))

console.log("End");


console.log("Start");

function delay1(message, time) {
    setTimeout(() => {
        console.log(message);
    }, time);
}

delay1("Step 1", 1000)      //Opening URL
delay1("Step 2", 1000)      //Provide username

console.log("End");



//Reject example - 

function delay2(message, time, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Error: Something went wrong!"); // Simulating failure
            } else {
                console.log(message);
                resolve(); // Task completed successfully
            }
        }, time);
    });
}

console.log("Start");

delay2("Step 1", 1000)
    .then(() => delay2("Step 2", 1000, true)) // This will fail
    .then(() => delay2("Step 3", 1000))
    .catch((error) => console.error(error)) // Handle the failure

console.log("End");




//async await

function delay(message, time, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("Error: Something went wrong!"); // Simulating failure
            } else {
                console.log(message);
                resolve(); // Task completed successfully
            }
        }, time);
    });
}

// Using async/await instead of .then()
//We are running async code as if it is sync.

async function runTasks(){
    console.log("Start")

    // try{
    //      await delay("Step1", 1000)      //1 sec
    //      await delay("Step2", 1000, true)      //1 sec
    //      await delay("Step3", 1000)      //1 sec
    // } catch(error){
    //     console.error(error)        //Handling the error message
    // }

    await delay("Step1", 1000)      //1 sec
         await delay("Step2", 1000, true)      //1 sec
         await delay("Step3", 1000)

    console.log("End")
}

runTasks()

await console.log("Hi Sachin")

//Types
//Typescript is Javascript with Additional types

//all JavaScript code is considered valid TypeScript. 

//Static Checking
// int number = 19

//TS is only for development purpose
//TS(.ts) -> JS(.js)

//Typescript is a superset of Javascript so whatever features are present
//in JS are also present in TS.

//Typescript is developed by Microsoft.

//TypeScript cannot be run directly in the browser or in Node.js. It first needs to be compiled
// (or transpiled) into plain JavaScript.

// When you write TypeScript code, the file has a .ts extension.
// You then compile that .ts file using the TypeScript compiler (tsc).
// The compiler converts your .ts file into a .js file - plain JavaScript.
// This .js file can then be executed in any JavaScript environment - like a browser or Node.js.

//Write in TypeScript → Compile to JavaScript → Run the JavaScript

//npm install -g typescript
//tsc -v

//Compiles the TS code into JS
//tsc app.ts

//NodeJS

//Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

//Typescript Executor(tsx)
//npm install -g tsx


