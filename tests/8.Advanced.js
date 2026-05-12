
//1. forEach()
//Accepts a callback function. Calls the callback once per element in the array
//We dont need return keyword
//n refers to each element of the array

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

//for, while, for..of, forEach()

nums.forEach(function (n) {    // Traditional syntaxh to define and Run Function
  console.log(n)
})

nums.forEach((numbers) => {    //Arrow function syntax to define and Run Function
  console.log(numbers)
})

let Num = [9, 8, 7, 6, 5, 4]
let SquareRoot = Num.forEach((n) => { return (n * n) })
console.log(SquareRoot)                                   // This will return Undefined because forEach() does not return anything. 
// It is used to perform some side effect like printing something on the console. 
// If we want to return a new array, we can use map() method which we will discuss later.



const books = [
  {
    title: 'Five Point Someone',
    author: 'Chetan Bhagat',
    rating: 4.2
  },
  {
    title: 'Time Money Freedom',
    author: 'Ray Milton',
    rating: 4.5
  },
  {
    title: 'You Are SuperNatural',
    author: 'Joe Dispenza',
    rating: 4.6
  },
]

console.log(books[0].title)     //Five Point Someone

books.forEach((book, index) => {
  console.log(book.title)
  // console.log(book['title'])
})

//2. map()
//It is used to create a new array from an existing array by applying some logic
//on each element of the array. It does not alter/update the original array. Use
//the return keyword inside the callback.

const texts = ["rofl", "lol", "omg", "ttyl"]

// texts.forEach(text => {
//     console.log(text.toUpperCase())
// })


const caps = texts.map(text => {
  return text.toUpperCase()
})

console.log(caps)       //[ 'ROFL', 'LOL', 'OMG', 'TTYL' ]
//join() - [R, O, F, L]
const caps1 = texts.map(text => {
  return text.toUpperCase().split("").join(".")
})
console.log(caps1)

  /
  //[ 'R.O.F.L', 'L.O.L', 'O.M.G', 'T.T.Y.L' ]

  //let Square = x => {
  // return x * x
  //}

  //const multiply = (x, y) => {
  //   return x * y
  //}

  console.log(multiply(4, 5))

//Automatic return
//Implicit return - In scenarios where we want to return just one expression as
//shown above, we can rewrite this arrow function using parentheses instead of
//curly braces. There we have to omit the return keyword. We can't use a return
//statement or we will get an error. We cant use semicolon also after x*x

const square1 = x => x * x

console.log(square1(4))


const nums1 = [1, 2, 3, 4, 5, 6, 7, 8]
const parityList1 = nums1.map(n => { if (n % 2 === 0) { return 'Even'; } else { return 'Odd'; } })
console.log(parityList1)



//3. filter()
//Accepts a callback function. Creates a new array with all elements that pass
//the test provided by the implementation function/condition. Use the return
//keyword inside the callback.

const num2 = [1, 2, 3, 4, 5, 6, 7, 8];

const evens = num2.filter(n => {
  return n % 2 === 0
})

console.log(evens)      //[ 2, 4, 6, 8 ]

const books1 = [
  {
    title: 'Five Point Someone',
    author: 'Chetan Bhagat',
    rating: 4.2
  },
  {
    title: 'Time Money Freedom',
    author: 'Ray Milton',
    rating: 4.5
  },
  {
    title: 'You Are SuperNatural',
    author: 'Joe Dispenza',
    rating: 4.6
  },
]

//rating >= 4.5
const goodBooks = books1.filter(book => {
  return book.rating >= 4.5
})

console.log(goodBooks)

//reduce() - It takes an array of values and reduces them down to a single
//value. Example - summing an array
//We can also find the maxmimum or a minimum value inside an array


//The reduce() method takes a callback and inside this callback, the first
//parameter is accumulator and the second parameter is the current value of
//the array(starting from 2nd index). Make sure to use the return keyword.


//accumulator is the final value we are reducing down to.

const arr1 = [3, 5, 7, 9, 11]   //Sum of all these elements

//arr1.reduce(callback, ?initialValue)

const sum = arr1.reduce((accumulator, currValue) => {
  return accumulator * currValue
})

console.log(sum)            //35

// Callback        Accumulator     currValue   return value
//Extra                 0               3           3
//1st                   3               5           8
//2nd                   8               7           15       
//3rd                   15              9           24
//4th                   24              11          35


//Assignment 1 - We have an array of votes. We want to use reduce() method to return an
//object that has count of y and n. Use an object as the accumulator.


//We will check if the object has the key or not. First time, it wont be
//present. So we will add y:1 inside the object. Next time onwards, we will
//again check if the object has the key. If it is present, simply increment
//its value.


//{ y: 7, n: 6 }
const votes = ['y', 'y', 'n', 'y', 'y', 'n', 'y', 'n', 'n', 'n', 'n', 'y', 'y']

// {
//     2: [


//     ],
//     3: [


//     ]
// }


const books11 = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'A Truly Horrible Book',
    authors: ['Xavier Time'],
    rating: 2.18,
    genres: ['fiction', 'garbage']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]


let num = [5, 4, 3, 2, 1]
let factorialnum = num.map(n => {
  let result = 1
  for (let i = 1; i <= n; i++) {

    result = result * i
  }
  return result
}) 
console.log(factorialnum)





