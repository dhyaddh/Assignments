/*
Rahul and Aman are trying to compare their BMI(Body Mass Index) which is calculated 
using this formula:
BMI = mass / height square
OR
BMI = mass / height * height
where mass is in KG and height is in metre

1. Store Rahul's and Aman’s mass and height in variables
2. Calculate both their BMIs using the formula
3. Create a boolean variable 'rahulHigherBMI' containing information about whether Rahul 
   has a higher BMI than Aman.

TEST DATA: Rahul weighs 78 kg and is 1.69 m tall.
Aman weighs 92 kg and is 1.95 m tall.

GOOD LUCK 😊
*/

//Multi cursor - Control/Command + D

let weightRahul = 78
let heightRahul = 1.69

let weightAman = 92
let heightAman = 1.95

//BODMAS
//PEMDAS
let bmiRahul = weightRahul / (heightRahul ** 2)
let bmiAman = weightAman / (heightAman ** 2)

//Comparison operator
let rahulHigherBMI = bmiRahul > bmiAman

console.log({bmiRahul, bmiAman, rahulHigherBMI})





