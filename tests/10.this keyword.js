//Intro to Keyword This

//this -> always gives you an object back.

console.log(this)

//this keyword inside any object will refer to that object itself.

//2 types of Objects in JS
//1. Standalone object
//2. Class Object

const person = {
    first: 'Piyush',
    last: 'Gupta',
    nickName: 'PSV',
    fullName(){
        // console.log(`${this.first} ${this.last} -> ${this.nickName}`)
        const {first, last, nickName} = this
        console.log(`${first} ${last} -> ${nickName}`)
    },
    printBio(){
        this.fullName()
    }
}

//this    -> {}

person.fullName()

//Left of Dot rule