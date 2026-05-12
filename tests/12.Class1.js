//OOPs
//Classes - Blueprint
//Creating 1 or more object
//Upper camel casing
//ES2015 - ES6
//Classes - To organize your code better, use classes.

//Default constructor in JS
class Triangle {
    getArea() {
        return (this.a * this.b) / 2
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }

    sayHi(){
        return "Hello from Triangle"
    }
}

//Triangle obj = new Triangle()
const myTri = new Triangle()
console.log(myTri)     //{}

myTri.a = 3
myTri.b = 4
console.log(myTri)  

console.log(myTri.getArea())
console.log(myTri.getHypotenuse())

const secondTri = new Triangle()
console.log(secondTri)

secondTri.a = 3
secondTri.b = 4
console.log(secondTri)