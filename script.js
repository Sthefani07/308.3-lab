//______________________________________ Loop through all numbers from 1 to 100.

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
for (let i = 0; i <= 20; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i + "Fizz Buzz");
    }else if (i % 3 === 0){
        console.log(i + "Fizz Fizz");
    }else if (i % 5 === 0){
        console.log(i + "Fizz Buzz");
    }else{
        console.log(i);
    }
}




// ___________________________________If a number is not divisible by either 3 or 5, log the number.
