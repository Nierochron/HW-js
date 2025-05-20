const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
const string = friends.join(',');
console.log(string);

let cards = [
  'карточка-1',
  'карточка-2',
  'карточка-3',
  'карточка-4',
  'карточка-5',
];

cards = cards.filter(card => card !== 'карточка-3');
console.log('Видалення картки:', cards);

cards.splice(2, 0, 'Карточка-6');
console.log('Додавання картки:', cards);

const idxUpdate = cards.indexOf('карточка-2');
if (idxUpdate !== -1) {
  cards[idxUpdate] = 'Оновлена картка';
}
console.log('Після оновлення:', cards);

const cardToRemove = 'карточка-3';
const idxRemove = cards.indexOf(cardToRemove);
if (idxRemove !== -1) {
  cards.splice(idxRemove, 1);
}
console.log('Видалення з indexOf:', cards);

cards.splice(2, 0, 'Карточка-6');
console.log('Додавання по індексу:', cards);

const idxToUpdate = cards.indexOf('карточка-4');
if (idxToUpdate !== -1) {
  cards[idxToUpdate] = 'Оновлена картка-4';
}
console.log('Оновлення по індексу:', cards);