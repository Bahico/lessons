// Exercise: Understanding JavaScript Repetition (Loops)
// Objective: Takrorlash operatorlari (for, while) va array bilan loop ishlatishni o'rganing.

// 1. 1 dan 10 gacha sonlarni chiqaradigan "for" loop yozing.
//    Example output: 1, 2, 3 ... 10

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2. 10 dan 1 gacha teskari tartibda sonlarni chiqaradigan loop yozing.
//    Example output: 10, 9, 8 ... 1

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// 3. 1 dan 20 gacha bo'lgan juft sonlarni chiqaradigan loop yozing.
//    Example output: 2, 4, 6 ... 20

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 4. 1 dan 5 gacha sonlar yig'indisini toping va natijani chiqaring.
//    Example: 1 + 2 + 3 + 4 + 5 = 15

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log("Yig'indi:", sum);

// 5. "while" loop yordamida 5 dan 1 gacha sonlarni chiqaring.

// let number = 5;
// while (number >= 1) {
//     console.log(number);
//     number--;
// }

// 6. Array ichidagi barcha elementlarni loop bilan chiqarib bering.
//    Example: ["Olma", "Banan", "Gilos"]

// const fruits = ["Olma", "Banan", "Gilos"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// 7. Bonus: Array ichidan eng katta sonni toping.
//    Example: [3, 7, 2, 9, 5] => 9

// const numbers = [3, 7, 2, 9, 5];
// let max = numbers[0];
//
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }
//
// console.log("Eng katta son:", max);
