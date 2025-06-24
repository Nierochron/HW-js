const user = {
  name: 'John',
  age: 30,
  hobby: 'reading',
  premium: true
}

user.mood = 'happy'
user.hobby = 'skydiving'
user.premium = false

const { name, age, hobby, premium, mood } = user
console.log(`name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}, mood: ${mood}`)

function countProps(obj) {
  return Object.keys(obj).length
}

console.log(countProps({}))
console.log(countProps({ name: 'Anna', age: 2 }))
console.log(countProps({ mail: 'anna@gmail.com', isOnline: true, score: 500 }))

const employees = {
  1: { name: 'anna', tasksDone: 29 },
  2: { name: 'alexa', tasksDone: 35 },
  3: { name: 'helen', tasksDone: 1 },
  4: { name: 'igor', tasksDone: 99 }
}

function findBestEmployee(employees) {
  let bestName = ''
  let bestTasks = 0
  for (const { name, tasksDone } of Object.values(employees)) {
    if (tasksDone > bestTasks) {
      bestTasks = tasksDone
      bestName = name
    }
  }
  return bestName
}

console.log(findBestEmployee(employees))

const employeesSalary = {
  1: { name: 'andrew', salary: 100 },
  2: { name: 'poly', salary: 150 },
  3: { name: 'alfred', salary: 80 }
}

function countTotalSalary(employees) {
  let totalSalary = 0
  for (const { salary } of Object.values(employees)) {
    totalSalary += salary
  }
  return totalSalary
}

console.log(countTotalSalary(employeesSalary))
console.log(countTotalSalary({}))

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 }
]

function getAllPropValues(arr, prop) {
  const result = []
  for (const item of arr) {
    if (item[prop] !== undefined) result.push(item[prop])
  }
  return result
}

console.log(getAllPropValues(products, 'name'))
console.log(getAllPropValues(products, 'quantity'))
console.log(getAllPropValues(products, 'category'))

function calculateTotalPrice(allProducts, productName) {
  let total = 0
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) total += price * quantity
  }
  return total
}

console.log(calculateTotalPrice(products, 'Радар'))
console.log(calculateTotalPrice(products, 'Дроїд'))
