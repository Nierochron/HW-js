function logItems(array) {
  array.forEach((item, i) => console.log(`${i + 1} - ${item}`));
}

logItems(['Mango', 'Poly', 'Ajax']);

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(' ').length * pricePerWord;
}

console.log(calculateEngravingPrice('Best wishes', 10));

function findLongestWord(string) {
  return string.split(' ').reduce((a, b) => b.length > a.length ? b : a);
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

function formatString(string) {
  return string.length <= 40 ? string : string.slice(0, 40) + '...';
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Curabitur ligula sapien, tincidunt non, euismod vitae, dolor.'));
console.log(formatString('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'));
console.log(formatString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'));

function checkForSpam(message) {
  const msg = message.toLowerCase();
  return msg.includes('spam') || msg.includes('sale');
}

console.log(checkForSpam('Get best sale now!'));
console.log(checkForSpam('Hello world'));

let input, numbers = [], total = 0;
while (true) {
  input = prompt('Введіть число');
  if (input === null) break;
  if (isNaN(input) || input.trim() === '') {
    alert('Було введено не число, попробуйте ще раз');
    continue;
  }
  numbers.push(Number(input));
}
if (numbers.length) {
  total = numbers.reduce((sum, n) => sum + n, 0);
  console.log(`Загальна сума чисел дорівнює ${total}`);
}