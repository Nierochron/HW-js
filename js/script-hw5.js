let drink = "Кава"

switch (drink) {
    case "Кава":
        console.log(`Ви вибрали: ${drink}`);
        break;
    case "Сік":
        console.log(`Ви вибрали: ${drink}`);
        break;
    case "Чай":
        console.log(`Ви вибрали: ${drink}`);
        break;

    default:
        console.log("Ви нічого не вибрали")
}

let day = "понеділок"
let workDays = ["понеділок", "вівторок", "середа", "четвер", "п’ятниця"];
let weekendDays = ["субота", "неділя"];

if (workDays.includes(day)) {
    console.log(`${day} - це робочий день`);
} else if (weekendDays.includes(day)) {
    console.log(`${day} - це вихідний день`);
} else {
    console.log("Такого дня немає");
}

let month = "серпень"
let summerMonth = ["червень", "липень", "серпень"]
let autumnMonth = ["вересень", "жовтень", "листопад"]
let winterMonth = ["грудень", "січень", "лютий"]
let springMonth = ["березень", "квітень", "травень"]

if (summerMonth.includes(month)) {
    console.log(`${month} - це місяць літа`);
} else if (autumnMonth.includes(month)) {
    console.log(`${month} - це місяць осені`);
} else if (winterMonth.includes(month)) {
    console.log(`${month} - це місяць зими`);
} else if (springMonth.includes(month)) {
    console.log(`${month} - це місяць весни`);
} else {
    console.log("Такого місяця немає");
}

let color = "зелений";

if (color === "червоний") {
    console.log("стоп");
} else if (color === "зелений") {
    console.log("йти");
} else if (color === "жовтий") {
    console.log("чекати");
} else {
    console.log("невідомий колір");
}

let num1 = 10;
let num2 = 5;
let operator = "+";
let result;

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 === 0) {
    result = "Помилка: ділення на нуль неможливе";
  } else {
    result = num1 / num2;
  }
} else {
  result = "Невідомий оператор";
}

console.log("Результат:", result);