// Exercise: Understanding JavaScript Classes
// Objective: Klass yaratish, constructor, metodlar va obyektlar bilan ishlashni o'rganing.

// 1. "Person" nomli class yarating.
//    Constructor ichida "name" va "age" qiymatlarini saqlang.
//    Example: new Person("Alice", 25)

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// 2. "introduce" nomli metod qo'shing.
//    U quyidagi matnni qaytarsin:
//    Example: "Salom, mening ismim Alice va yoshim 25 da."

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     introduce() {
//         return "Salom, mening ismim " + this.name + " va yoshim " + this.age + " da.";
//     }
// }

// 3. "Person" klassidan bitta obyekt yarating va "introduce" metodini chaqiring.
//    Natijani console ga chiqaring.

// const user1 = new Person("Alice", 25);
// console.log(user1.introduce());

// 4. "Student" nomli class yarating va u "Person" classidan meros olsin (extends).
//    Student constructorida qo'shimcha "course" qiymatini saqlang.

// class Student extends Person {
//     constructor(name, age, course) {
//         super(name, age);
//         this.course = course;
//     }
// }

// 5. Student ichiga "study" nomli metod qo'shing.
//    U quyidagi matnni qaytarsin:
//    Example: "Alice JavaScript kursida o'qiyapti."

// class Student extends Person {
//     constructor(name, age, course) {
//         super(name, age);
//         this.course = course;
//     }
//
//     study() {
//         return this.name + " " + this.course + " kursida o'qiyapti.";
//     }
// }

// 6. Student klassidan ikkita obyekt yarating va ularning metodlarini sinab ko'ring.

// const student1 = new Student("Alice", 25, "JavaScript");
// const student2 = new Student("Bob", 22, "Frontend");
//
// console.log(student1.introduce());
// console.log(student1.study());
// console.log(student2.introduce());
// console.log(student2.study());

// 7. Student obyektlarini array ichida saqlang va
//    name bo'yicha qidiruvchi funksiya yozing.

// const students = [
//     new Student("Alice", 25, "JavaScript"),
//     new Student("Bob", 22, "Frontend"),
//     new Student("Ikrom", 24, "Backend")
// ];
//
// function findStudentByName(name) {
//     const foundStudent = students.find(student => student.name === name);
//     if (foundStudent) {
//         console.log(foundStudent.introduce());
//         console.log(foundStudent.study());
//     } else {
//         console.log(name + " ismli student topilmadi.");
//     }
// }
//
// findStudentByName("Alice");
// findStudentByName("Sardor");
