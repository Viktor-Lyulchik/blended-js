'use strict';

// const fullName = 'Jacob Mercer';
// const firstName = fullName.slice(0, 5);
// const lastName = fullName.slice(6);

// console.log(fullName); // "Jacob Mercer"
// console.log(firstName); // "Jacob"
// console.log(lastName); // "Mercer"
// console.log(fullName.slice(0, -1));

// Завдання 1:

// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код
// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// //varian1
// const indexBlues = styles.indexOf('blues');
// if (indexBlues >= 0) {
//   styles[indexBlues] = 'classic';
// }
////variant2
// for (const style of styles) {
//   console.log(style);
//   if (style === 'blues') {
//     styles[styles.indexOf(style)] = 'classic';
//   }
// }
//console.log(styles);

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems([5, 4, 7, 9, 3, 23, 45]);

// Завдання 2:

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const userName = prompt('Enter your name').trim();
//   const indexArr = array.indexOf(userName);
//   let msg = 'User not found';
//   if (indexArr >= 0) {
//     msg = `Welcome, ${userName}`;
//   }
//   alert(msg);
//   return msg;
// }
// checkLogin(['Peter', 'John', 'Igor', 'Sasha']);

// Завдання 3:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage() {
//   let sum = 0;
//   let count = 0;
//   for (const item of arguments) {
//     if (typeof item === 'number') {
//       sum += item;
//       count++;
//     }
//   }
//   return count > 0 ? sum / count : 0;
// }
// console.log(calculateAverage(2, 2, 2, 2, 2, 2, 2, 100));

// Завдання 4:

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
// function sumneighbor(arr) {
//   const newarr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     newarr.push(arr[i] + arr[i + 1]);
//   }
//   return newarr;
// }
// console.log('must be result', [33, 45, 39, 17, 25, 27, 29]);

// console.log('arg', [22, 11, 34, 5, 12, 13, 14, 15]);

// console.log('result', sumneighbor([22, 11, 34, 5, 12, 13, 14, 15]));

// Завдання 5:

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallestNumber(numbers) {
//   console.log(typeof numbers);
//   //масиви - це нащадки об'єктів, тому typeOf масива - верне object
//   if (typeof numbers === 'object') {
//     return Math.min(...numbers);
//   }
//   return 'Sory, it is not an array!';
// }
// console.log(findSmallestNumber([2, 5, 35, 56, 12, 24, 7, 80, 3]));

// Завдання 6:

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(strIng) {
//   const arr = strIng.split(' ');
//   let word = '';
//   for (const elem of arr) {
//     if (elem.length > word.length) {
//       word = elem;
//     }
//   }
//   return word;
// }

// console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'

// Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tenis',
//   premium: true,
// };
// user['mood'] = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// for (const key of Object.keys(user)) {
//   console.log(`${key}:${user[key]}`);
// }

// Завдання 8:

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// for (const key of Object.keys(salaries)) {
//   sum += salaries[key];
// }
// console.log(sum);

// Завдання 9:

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//   captions: [],
//   read(a, b) {
//     this[a] = b;
//     this.captions.push(a);
//   },
//   sum() {
//     let sumCaption = 0;
//     for (const key of this.captions) {
//       if (this.exist(key)) {
//         sumCaption += this[key];
//         console.log('key=', key);
//       }
//     }
//     return sumCaption;
//   },
//   exist(key) {
//     return this[key] !== undefined;
//   },
// };
// calculator.read(1, 2);
// calculator.read(2, 3);
// calculator.read(3, 4);
// calculator.read(4, 5);
// console.log(calculator);
// console.log(calculator.exist(1));
// console.log(calculator.exist(2));
// console.log(calculator.exist(3));
// console.log(calculator.exist(4));
// console.log(calculator.exist(5));
// console.log(calculator.sum());

// Завдання 10:

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: 'Яблуко', price: 45, quantity: 7 },
  { name: 'Апельсин', price: 60, quantity: 4 },
  { name: 'Банан', price: 125, quantity: 8 },
  { name: 'Груша', price: 350, quantity: 2 },
  { name: 'Виноград', price: 440, quantity: 3 },
  { name: 'Банан', price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let sum = 0;
  for (const element of fruits) {
    if (element.name === fruitName) {
      sum += element.price * element.quantity;
    }
  }
  return sum;
}

console.log(calcTotalPrice(fruits, 'Банан'));
console.log(calcTotalPrice(fruits, 'Яблуко'));
console.log(calcTotalPrice(fruits, 'Апельсин'));
console.log(calcTotalPrice(fruits, 'Груша'));
console.log(calcTotalPrice(fruits, 'Виноград'));
