let numbers = [1, 2, 3];
numbers[1] = 10;
console.log("Після зміни:", numbers);

let strings = ["рядок1", "рядок2", "рядок3"];
strings.push("рядок4");
console.log("Після push:", strings);

let sumArray = [5, 10, 15];
let sum = sumArray.reduce((acc, num) => acc + num, 0);
console.log("Сума:", sum);

let fiveNumbers = [10, 20, 30, 40, 50];
console.log("Елементи:");
for (let i = 0; i < fiveNumbers.length; i++) {
    console.log(fiveNumbers[i]);
}

let fiveStrings = ["короткий", "довгийрядок", "щеодин", "рядок", "довгийрядок2"];
console.log("Довгі рядки:");
for (let str of fiveStrings) {
    if (str.length > 5) {
        console.log(str);
    }
}

let tenNumbers = [3, 7, 2, 9, 12, 5, 8, 1, 4, 6];
let maxNumber = Math.max(...tenNumbers);
console.log("Максимум:", maxNumber);

let evenNumbers = tenNumbers.filter(num => num % 2 === 0);
console.log("Парні:", evenNumbers);