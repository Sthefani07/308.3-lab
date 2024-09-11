//________PART 1______________________________ Loop through all numbers from 1 to 100.

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


// __________________________PART 2__________

// Loop through the characters of a given CSV string.
csv_string = `ID,Name,Occupation, Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

// Store each “cell” of data in a variable.
let rows = csv_string.split("\n");

// When you encounter a comma, move to the next cell.
for (let i = 0; i < rows.length; i++){
    let cells = rows[i].split(",");
    console.log(cells[0],cells[1],cells[2], cells[3]);
}


// When you encounter the “\r\n” sequence, move to the next “row.”

// Log each row of data.

// There will only be 4 cells per row.

// There will be no escaped characters other than “\n”.