let celsius = 25
let fahrenheit = (celsius * 9 / 5) + 32
console.log(celsius + '°C = ' + fahrenheit + '°F')

const daysInMonth = 29
const hoursInMonth = daysInMonth * 24
const minutesInMonth = hoursInMonth * 60
console.log('Days in month:', daysInMonth)
console.log('Hours in month:', hoursInMonth)
console.log('Minutes in month:', minutesInMonth)

let totalPrice = 100
let discount = totalPrice / 100 * 10
let discountedPrice = totalPrice - discount
console.log('Discounted price:', discountedPrice)

const floatNumber = Math.floor(12.78)
console.log('Float number:', floatNumber)

const floatString = parseFloat("45.67")
console.log('Float string:',floatString)

const intString = "123"
const parsedInt = parseInt(intString)
console.log('Parse int:', parsedInt)

const number = 100
const sqrtNumber = Math.sqrt(number)
console.log('Sqrt number', sqrtNumber)

const integer = 42
const stringNumber = "256"
const convertedInt = parseInt(stringNumber)
const convertedString = integer.toString();
console.log('Converted int:', convertedInt)
console.log('Converted string:', convertedString)