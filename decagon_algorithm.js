// dynamic programing: a way of making complex algo reading run faster, technically a way to increase the time and space complexity of your aalgorithm.
// so it is not enough to solve a problem, the solution must be scalabe.
// dynamic algorithm is divided into 1. momoization and 2. tabulation.

// DECAGON FINAL ALGORRITHM QUESTION
// WRITE A FUNCTION THAT RETURNS FALSE IF AN ARRAY IS SEARILISED
// IT SHPOULD RETURN THE MISSING NUMBER IF THE ARRAY IS NOT SSERIALISED.
// [1,2,3,4,5,6,7,8,9] SHOULD RETURN FALSE
// [1,2,3,4,5,7,8,9] SHOULD RETURN 6
// i solved this algorithm question 13th/may 2021


// const serial = (arr) => {

//     if(arr == []) return false;

//     for (let num of arr){
//         const rem = arr.slice(arr.indexOf(num) + 1);
//         if(rem[0] - num > 1) return num + 1;
//         serial(rem);     
//     }

//     return false
// }

// console.log(serial([1,2,3,4,5,6])) // false
// console.log(serial([1,2,3,5,6])) // 4
// console.log(serial([1,3,5,6])) // 2
// console.log(serial([1,2,3,4,5])) // false





























































































































































































































































































































































































































































































































































































































































































































































































































