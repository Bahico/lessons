// Exercise: Understanding JavaScript Functions
// Objective: Funksiyalarda parametrlarni aniqlash, chaqirish va tushunishni hamda qiymatlarni qaytarishni o'rganing.

// 1. "Name" parametrini oladigan va tabrik xabarini qayd etadigan "greet" nomli funksiyani aniqlang.
//    Example: greet("Alice") "Salom, Alice!" yozuvini yozishi kerak.

// function greet(name) {
//     console.log("Salom, " + name + "!");
// }


// 2. "greet" funksiyasini o'z nomingiz bilan chaqiring.

// greet("Alice");

// 3. Ikkita 'a' va 'b' parametrlarini oladigan, ularni qo'shadigan va natijani qaytaradigan 'add' nomli funksiyani aniqlang.
//    Example: add(5, 3) should return 8.

// function add(a, b) {
//     return a + b;
// }

// 4. Ikki raqam bilan "qo'shish" funksiyasini chaqiring va natijani jurnalga yozing.

// console.log(add(9, 3));
// console.log(add(9, 3));
// console.log(add(9, 3));
// console.log(add(9, 3));

// 5. Bonus: Salomlashishni saqlaydigan va salomlashuv matnini qaytaradigan "greetReturn" nomli funksiyani aniqlang.
// const greets = [
//     {
//         id: 1,
//         name: "Ikrom"
//     },
//     {
//         id: 2,
//         name: "Alice"
//     },
//     {
//         id: 3,
//         name: "Baha"
//     },
// ];

// function greetReturn(name) {
//     greets.push({
//         id: greets.length + 1,
//         name: name
//     });
//     return "Hello, " + name + "!";
// }

// console.log(greetReturn("Alice"));

// 6. Name berib bunga salom berilganmi yo'qligini tekshiring va natijani jurnalga yozing.

// function checkGreet(name) {
//     const found = greets.find(greet => greet.name === name);
//     if (found) {
//         console.log(name + " ga salom berilgan.");
//     } else {
//         console.log(name + " ga salom berilmagan.");
//     }
// }

// checkGreet("Alice");
// checkGreet("Bob");