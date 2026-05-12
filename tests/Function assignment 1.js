function isValidPassword(password, username) {

    // Rule 1 - Password must be at least 8 characters

    if (password.length < 8) {
        return false
    } 


    // Rule 2 - Password cannot contain spaces

    if (password.includes(" ")) {
        return false
    } 
   

    // Rule 3 - Password cannot contain username

    if (password.includes(username)) {
        return false
    }


}

console.log(isValidPassword('89Fjj1nms', 'dogLuvr'))  // true
console.log(isValidPassword('123ghj77', 'dogLuvr'))// false
console.log(isValidPassword('hello1', 'dogLuvr'))      // false



function avg(numbers) {

    let sum = 0

    for (let i = 0; i < numbers.length; i++) {

        sum = sum + numbers[i]
    }
    return sum / numbers.length
}

console.log(avg([0, 50]))    // 25
console.log(avg([75, 76, 80, 95, 100]))    // 85.2