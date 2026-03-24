// Exercise: Function Repetition Practice
// Objective: Funksiyalarni takrorlash va loop bilan birga ishlatishni mustahkamlash.

// 1. "printNumbers" nomli funksiya yarating.
//    U 1 dan n gacha sonlarni console ga chiqarsin.
//    Example: printNumbers(5) => 1, 2, 3, 4, 5

// function printNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
//
// printNumbers(5);

// 2. "printEvenNumbers" nomli funksiya yarating.
//    U 1 dan n gacha bo'lgan juft sonlarni chiqarsin.
//    Example: printEvenNumbers(10) => 2, 4, 6, 8, 10

// function printEvenNumbers(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
//
// printEvenNumbers(10);

// 3. "sumToN" nomli funksiya yarating.
//    U 1 dan n gacha sonlar yig'indisini qaytarsin.
//    Example: sumToN(5) => 15

// function sumToN(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
//
// console.log(sumToN(5));

// 4. "repeatText" nomli funksiya yarating.
//    U text va count parametrini oladi va text ni count marta chiqarsin.
//    Example: repeatText("Salom", 3)

// function repeatText(text, count) {
//     for (let i = 1; i <= count; i++) {
//         console.log(text);
//     }
// }
//
// repeatText("Salom", 3);

// 5. "countVowels" nomli funksiya yarating.
//    U berilgan matndagi unli harflar sonini qaytarsin.
//    Example: countVowels("Javascript") => 3

// function countVowels(text) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//
//     for (let i = 0; i < text.length; i++) {
//         if (vowels.includes(text[i])) {
//             count++;
//         }
//     }
//
//     return count;
// }
//
// console.log(countVowels("Javascript"));

// 6. "findMax" nomli funksiya yarating.
//    U array ichidagi eng katta sonni qaytarsin.
//    Example: findMax([4, 9, 2, 15, 7]) => 15

// function findMax(arr) {
//     let max = arr[0];
//
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//
//     return max;
// }
//
// console.log(findMax([4, 9, 2, 15, 7]));

// 7. "runExercises" nomli funksiya yarating.
//    U yuqoridagi funksiyalardan bir nechtasini ketma-ket chaqirsin.

// function runExercises() {
//     printNumbers(5);
//     printEvenNumbers(10);
//     console.log("sumToN(5):", sumToN(5));
//     repeatText("Hello", 2);
//     console.log("countVowels('Function'):", countVowels("Function"));
//     console.log("findMax([1, 3, 9, 2]):", findMax([1, 3, 9, 2]));
// }
//
// runExercises();
