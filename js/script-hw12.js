const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true,
}

user.mood = "happy"

user.hobby = "skydiving"

user.premium = false

const keys = Object.keys(user)
for (const key of keys) {
    console.log(`${key}: ${user[key]}`)
}

function countProps(obj) {
    return Object.keys(obj).length
}

console.log(countProps({}))
console.log(countProps({ name: "Anna", age: 2 }))
console.log(countProps({ mail: "anna@gmail.com", isOnline: true, score: 500 }))

function findBestEmployee(employees) {
    let maxTasks = 0
    let bestEmployee = ""
    for (const [name, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks
            bestEmployee = name
        }
    }
    return bestEmployee
}

console.log(
    findBestEmployee({
        anna: 29,
        alexa: 35,
        helen: 1,
        igor: 99,
    })
)

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    })
)

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        andrew: 19,
        chelsy: 38,
    })
)

function countTotalSalary(employees) {
    let total = 0
    for (const salary of Object.values(employees)) {
        total += salary
    }
    return total
}

console.log(
    countTotalSalary({
        andrew: 100,
        poly: 150,
        alfred: 80,
    })
)

console.log(
    countTotalSalary({})
)

function getAllPropValues(arr, prop) {
    const values = []
    for (const obj of arr) {
        if (obj.hasOwnProperty(prop)) {
            values.push(obj[prop])
        }
    }
    return values
}

const products = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроїд", price: 400, quantity: 7 },
    { name: "Захоплення", price: 1200, quantity: 2 },
]

console.log(getAllPropValues(products, "name"))
console.log(getAllPropValues(products, "quantity"))
console.log(getAllPropValues(products, "category"))

function calculateTotalPrice(allProducts, productName) {
    let total = 0
    for (const product of allProducts) {
        if (product.name === productName) {
            total += product.price * product.quantity
        }
    }
    return total
}

console.log(calculateTotalPrice(products, "Радар"))
console.log(calculateTotalPrice(products, "Дроїд"))