//______________________PART 1______________________________ 
// Loop through all numbers from 1 to 100.

// let num = 100;
// while (num > 0) {
//   console.log(num);
//   num--;
// }

// ____________________________________if a number is divisible by 3, log “Fizz.”
// for (let i = 0; i <= 20; i++) {
//   if (i % 3 === 0) {
//     console.log(i + "Buzz");
//   } else {
//     console.log(i);
//   }
// }

// ____________________________________If a number is divisible by 5, log “Buzz.”

// for (let i = 0; i <= 20; i++){
//     if (i % 5 === 0){
//         console.log(i + "Buzz");
//     }else {
//         console.log(i)
//     }
// }

// ___________________________________If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// for (let i = 0; i <= 20; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i + "Fizz Buzz");
//     }else if (i % 3 === 0){
//         console.log(i + "Fizz Fizz");
//     }else if (i % 5 === 0){
//         console.log(i + "Fizz Buzz");
//     }else{
//         console.log(i);
//     }
// }

// ___________________________________If a number is not divisible by either 3 or 5, log the number.

// for (let i = 0; i <= 20; i++){
//     if (i % 3 !== 0 && i % 5 !== 0){
//         console.log(i);
//     }
// }


// ________________________________Part 2 _______________________

// let n = 9; // You can set this to any number you want to test

// let isPrime = false; // Variable to store if a number is prime

// // Start searching for the next prime number
// while (!isPrime) {
//     n++; // Increment n
//     isPrime = true; // Assume n is prime initially

//     // Check if n is divisible by any number from 2 to sqrt(n)
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             isPrime = false; // If divisible, n is not prime
//             break; // Break out of the loop
//         }
//     }

//     // If n is prime, log it and break out of the loop
//     if (isPrime) {
//         console.log(`The next prime number is: ${n}`);
//         break; // Exit the loop once a prime number is found
//     }
// }






// __________________________PART 3__________

// Loop through the characters of a given CSV string.
// csv_string = `ID,Name,Occupation, Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// // Store each “cell” of data in a variable.
// let rows = csv_string.split("\n");

// // When you encounter a comma, move to the next cell.
// for (let i = 0; i < rows.length; i++) {
//   let cells = rows[i].split(",");
//   console.log(cells[0], cells[1], cells[2], cells[3]);
// }
