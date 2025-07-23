const textEl = document.getElementById('text')
const btnEl = document.getElementById('button')
btnEl.textContent = textEl.textContent

const imgDogEl = document.getElementById('dogImg')
imgDogEl.src = 'https://a-z-animals.com/media/2021/08/Bernese-Mountain-Dog.jpg'

const linkEl = document.getElementById('link')
const imgCatEl = document.getElementById('catImg')
link.href = 'https://github.com/Nierochron/HW-js'
imgCatEl.alt = 'brown-white cat'

const listItemEl = document.querySelectorAll('.list-item')
const firstListItem = listItemEl[0]
firstListItem.textContent = 'Перший елемент списку'