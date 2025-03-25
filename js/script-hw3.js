// let result = 5 + 5 + '5'
// console.log('Type of Data -> Result:', typeof result)
// let email = 'email@gmail.com'
// console.log('User Email:', email)
// console.log('Email have @:', email.includes('@'));
// console.log('Email Lenght:', email.length)
// const wordOne = 'My'
// const wordTwo = 'name'
// const wordThree = 'is'
// let fullName = `${wordOne} ${wordTwo} ${wordThree} Viktor`;
// console.log('Full Name:', fullName)
// let userName = 'Oleksandr'
// let payment = 300
// alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`)




let cost;
let subscription = 'free';

if(subscription === 'pro'){
    cost = 100
    console.log('cost = 100')
} else {
    cost = 0
    console.log('cost = 0')
}


// {умова} ? {вираз якщо умова правдива} : {вираз якщо умова не правдива}
let result = subscription === 'pro' ? cost = 100 : cost = 0
console.log(result)