function getTriangleArea(a, b) {
    return (a * b) / 2
}

function getTriangleHypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2)
}

console.log(getTriangleArea(3, 4))
console.log(getTriangleHypotenuse(3, 4))


//They want to organize related functionality together
//Triangle functionality

//we can do is combine our data with our functions in an object.

let myTri = {
    a: 3,
    b: 4,
    getArea() {
        return (this.a * this.b) / 2
    },
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

console.log(myTri.getArea())
console.log(myTri.getHypotenuse())

let myTri2 = {
    a: 5,
    b: 12,
    getArea() {
        return (this.a * this.b) / 2
    },
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}