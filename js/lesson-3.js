'use strict';

// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const squear = numbers.map(item => item ** 2);
// console.log(squear);

// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const flatArr = data.map(item => item.values).flat(1);
// console.log(flatArr);

// const flatArr1 = data.flatMap(item => item.values);
// console.log(flatArr1);

// Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const someObj = people.some(item => item.age < 20);
// console.log(someObj);

// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const everyOdd = numbers.every(it => !(it % 2));
// console.log(everyOdd);

// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const firstEven = numbers.find(a => a % 2);
// console.log(firstEven);

// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// console.log(numbersArray.toSorted((a, b) => a - b));

// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// console.log(stringArray.toSorted((a, b) => a.localeCompare(b)));

// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// console.table(users.toSorted((a, b) => a.age - b.age));

// Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// console.table(user.filter(a => a.age > 20));

// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reduce((sum, a) => sum + a));

//add 10.1
// const friends = [
//   {
//     passport: '03005988',
//     name: 'Joseph Francis Tribbiani Jr',
//     age: 32,
//     sex: 'm',
//   },
//   { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//   { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//   { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//   { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//   { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
// ];
// // Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.

// const passp = friends.filter(it => it.sex === 'f').map(it => it.passport);

// console.log(passp);
//10.2
// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Eggs', price: 15 },
// ];

// const arr = products
//   .filter(it => it.price > 10)
//   .reduce((sum, it) => sum + it.price, 0);
// console.log(arr);

//10.3
// Маємо масив об'єктів, який представляє список замовлень:
// Поверніть список товарів з усіх виконаних замовлень.
// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];

// const arr = orders
//   .filter(it => it.status === 'completed')
//   .map(it => it.products)
//   .flat();
// console.log(arr);

//10.4
// Порахуй загальну кількість лайків в категорії  Fashion

// const posts = [
//   { title: 'Post 1', likes: 20, category: 'Tech' },
//   { title: 'Post 2', likes: 45, category: 'Fashion' },
//   { title: 'Post 3', likes: 12, category: 'Tech' },
//   { title: 'Post 4', likes: 30, category: 'Fitness' },
//   { title: 'Post 5', likes: 15, category: 'Fashion' },
//   { title: 'Post 6', likes: 50, category: 'Tech' },
// ];

// const arr = posts
//   .filter(it => it.category === 'Fashion')
//   .reduce((sum, it) => sum + it.likes, 0);
// console.log(arr);

//10.5
// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.
// const courses = [
//   {
//     name: 'Basic HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
//   },
//   {
//     name: 'Intermediate HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: [
//       'VSCode',
//       'Type system',
//       'Loops',
//       'Function',
//       'Git',
//       'Conditions',
//       'Classes',
//       'GitHub',
//       'DOM',
//     ],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: [
//       'VSCode',
//       'NPM',
//       'Bundlers',
//       'Transpiling',
//       'Git',
//       'Promises',
//       'AJAX',
//       'GitHub',
//     ],
//   },
// ];

// const arr = courses
//   .flatMap(it => it.topics)
//   .filter((course, index, array) => array.indexOf(course) === index);
// console.log(arr);

//10.6
//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }
// const rect = new Rectangle(2, 5);
// console.log(rect.calculateArea());

// Завдання 11:

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24

// class Calculator {
//   currVal;
//   constructor() {
//     this.currVal = 0;
//   }
//   number(num) {
//     this.currVal = num;
//     return this;
//   }
//   add(num) {
//     this.currVal += num;
//     return this;
//   }
//   substruct(num) {
//     this.currVal -= num;
//     return this;
//   }
//   multiply(num) {
//     this.currVal *= num;
//     return this;
//   }
//   divide(num) {
//     if (num === 0) {
//       alert("you can`t' divide by zero!!!");
//     } else {
//       this.currVal /= num;
//     }
//     return this;
//   }
//   getResult() {
//     return this.currVal;
//   }
// }
// const calc = new Calculator();
// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .substruct(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(0) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const cl = new Client('myLogin', '12345');
// console.log(cl);
// console.log('Login: ', cl.login, 'Email: ', cl.email);
// cl.login = 'NEWLogin';
// cl.email = 'NEWEmail';
// console.log('Login: ', cl.login, 'Email: ', cl.email);

// Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою
// співробітника та відділом, в якому він працює.

// class Person {
//   name;
//   age;
//   gender;
//   email;
//   constructor({ name, age, gender, email }) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   salary;
//   department;
//   constructor({ name, age, gender, email, salary, department }) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }
//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const newP = new Person({
//   name: 'User',
//   age: 23,
//   gender: 'm',
//   email: 'user@mail.com',
// });
// console.log(newP.getDetails());
// const newE = new Employee({
//   name: 'User',
//   age: 23,
//   gender: 'm',
//   email: 'user@mail.com',
//   salary: 15000,
//   department: 'HR',
// });
// console.log(newE.getEmployeeDetails());

//14

// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

// class Phone {
//   static MAX_PRICE = 40000;
//   #price;
//   //   constructor(price) {
//   //     this.#price = price;
//   //   }
//   set price(newPrice) {
//     if (newPrice <= Phone.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   get price() {
//     return this.#price;
//   }
// }

// const tel = new Phone();
// console.log(tel);
// tel.price = 35000;
// console.log(tel);
// tel.price = 50000;
// console.log(tel);

//15
// Створіть клас BankAccount, який має конструктор для зберігання
// номеру рахунку та балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котру потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято amount грн. Залишок на рахунку: balance грн.`
// або "Недостатньо коштів на рахунку."
// deposit - метод для пововнення балансу. Отримує в якості аргументу
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено amount грн. Залишок на рахунку: balance грн.`
// checkBalance - метод для перевірки балансу.
// Виводить повідомлення `Залишок на рахунку: balance грн.`

// class BankAccount {
//   constructor() {
//     this.balance = 0;
//   }
//   withdraw(sum) {
//     if (this.balance >= sum) {
//       this.balance -= sum;
//       alert(`Знято ${sum} грн. Залишок на рахунку: ${this.balance} грн.`);
//     } else {
//       alert(`Недостатньо коштів на рахунку!!!`);
//     }
//   }
//   deposit(sum) {
//     this.balance += sum;
//     alert(`Поповнено ${sum} грн. Залишок на рахунку: ${this.balance} грн.`);
//   }
//   checkBalance() {
//     alert(`Залишок на рахунку: ${this.balance} грн.`);
//   }
// }

// const bal = new BankAccount();
// bal.checkBalance();
// bal.deposit(1000);
// bal.checkBalance();
// bal.withdraw(100);
// bal.checkBalance();
