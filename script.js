let fieldOne = "дз номер 4";
let fieldTwo = "заповнене поле";
console.log(fieldOne.trim() !== "" && fieldTwo.trim() !== "" ? "Обидва поля заповнені" : "Не всі поля заповнені");

let num1 = 3;
let num2 = 6;
let sum = num1 + num2;
console.log(sum > 10 ? "Сума більша за 10" : "Сума менша або дорівнює 10");

let text = "Цей код написаний на JavaScript";
console.log(text.includes("JavaScript") ? "Текст містить слово JavaScript" : "Текст не містить слово JavaScript");

let number = 15;
console.log((number > 10 && number < 20) ? "Число входить в діапазон від 10 до 20" : "Число не входить в діапазон від 10 до 20");

let name = "Lain";
let email = "lain@gmail.com";
let password = "qwerty";
let emailValid = email.includes("@") && email.indexOf(".") > email.indexOf("@");
console.log((name.length >= 3 && emailValid && password.length >= 6) ? "Перенаправлення на іншу сторінку" : "Помилка: неправильне заповнення");