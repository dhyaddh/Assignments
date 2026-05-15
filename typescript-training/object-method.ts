//Object : Object Datatype that can help us to store multiple properties in the form of key-value pair 

//1. Storing the data inside the object 
interface personInfo {
    name: string,
    age: number,
    visaStatus: boolean,
    salary?: number,
    address1: {
        city: string,
        state: string,
        zip: number,
        country?: string
    }
}

let person1: personInfo = {
    name: "bharath",
    age: 36,
    visaStatus: true,
    address: {
        city: "hyd",
        state: "TS",
        zip: 500081,
    }
}

//2. Access the data from the object. 

//Print a person's name from the person object. 
console.log(person1.name);
console.log(person1["name"]);

//Print a person's zip from the person object. 
console.log(person1.address.zip);
console.log(person1.address["zip"]);

//3. Adding a new property to the existing object. 

//Add salary as 200,000 in the main object and country: India in the address object. 
person1.salary = 200000;

console.log(person1);

//4. Update an existing property in the existing object. 

//Update the person's age from 36. 
person1.age = 35;
console.log(person1);

//5. Delete the existing property from the object. 
//Delete the age property from the person object. 
// delete person1.age;
// console.log(person1);

//6. Check whether a particular property is available within the object. 
//Verify whether age and name properties are available within the person object. 
console.log("name" in person1);
console.log("age" in person1);

//7. Get all the keys from the object. 
console.log(Object.keys(person1));
console.log(Object.keys(person1.address));

//8. Get all the values from the object. 
console.log(Object.values(person1));
console.log(Object.values(person1.address));

//9. Get all the keys and values together from the object. 
console.log("------------------------------")
console.log(Object.entries(person1.address));

//10. Iterate all the keys from the object
for (let key in person1) {
    console.log(key);
    console.log(person1[key as keyof personInfo])
}

//11. Verify the data type of the property within the object. 
console.log(typeof person1.name);
console.log(typeof person1.address)

//12. Merging two different objects together 
interface projectInfo {
    project: string,
    id: number
}

let project: projectInfo = {
    project: "amazon",
    id: 23456
}
console.log("------------------------------")
let mergedObject = { ...person1, ...project }; // ... dots are known as REST parameters
console.log(mergedObject);