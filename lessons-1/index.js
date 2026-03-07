const user = {
    name: 'Ikrom',
    age: 9,
    isAdmin: true,
    courses: ['html', 'css', 'js'],
    wife: null
};

// Bilet narhi 21 dan kattalarga 15 ming so'm, 12 dan kattlarga 10 ming so'm, 12 dan kichiklarga va tenglarga tekin.



if (user.age >= 21) {
    console.log('15 ming so\'m');
} else if (user.age > 12) {
    console.log('10 ming so\'m');
} else {
    console.log('Tekin');
}



















const users = [
    {
        name: 'Ikrom',
        age: 20,
    },
    {
        name: 'John',
        age: 25,
    },
    {
        name: 'Jane',
        age: 9,
    },
    {
        name: 'Baha',
        age: 100
    }
];

// users.forEach((item) => {
//     console.log(item.age);
// })


// hamma userni bilet narhi qancha bo'lishini hisoblaydigan funksiya yozing. Natijani konsolga chiqaring. (masalan: "Ikromning bilet narhi 15 ming so'm")

users.forEach(user => {
    if (user.age >= 21) {
        console.log('15 ming so\'m');
    } else if (user.age > 12) {
        console.log('10 ming so\'m');
    } else {
        console.log('Tekin');
    }
})


for (const user of users) {
    if (user.age >= 21) {
        console.log('15 ming so\'m');
    } else if (user.age > 12) {
        console.log('10 ming so\'m');
    } else {
        console.log('Tekin');
    }
}