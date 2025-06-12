let bankAccount = {
  ownerName: "Anna Shevchenko",
  accountNumber: "95353376547",
  balance: 1000,
  deposit(amount) {
    this.balance = this.balance + amount;
    alert("Рахунок поповнено на " + amount + ". Залишок: " + this.balance);
  },
  withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів на рахунку");
    } else {
      this.balance = this.balance - amount;
      alert("Знято " + amount + ". Залишок: " + this.balance);
    }
  }
};

if (confirm("Бажаєте поповнити рахунок?")) {
  let sum = prompt("Введіть суму для поповнення");
  sum = Number(sum);
  if (!isNaN(sum) && sum > 0) {
    bankAccount.deposit(sum);
  } else {
    alert("Некоректна сума");
  }
} else if (confirm("Бажаєте зняти готівку?")) {
  let sum = prompt("Введіть суму для зняття");
  sum = Number(sum);
  if (!isNaN(sum) && sum > 0) {
    bankAccount.withdraw(sum);
  } else {
    alert("Некоректна сума");
  }
}

let weather = {
  temperature: 0,
  humidity: 60,
  windSpeed: 10,
  checkTemperature(temp) {
    if (temp < 0) {
      alert("температура нижче 0 градусів Цельсія: " + temp);
      return true;
    } else {
      alert("температура вище або рівна 0 градусів Цельсія: " + temp);
      return false;
    }
  }
};

let tempInput = prompt("Введіть температуру повітря");
tempInput = Number(tempInput);
if (!isNaN(tempInput)) {
  weather.temperature = tempInput;
  weather.checkTemperature(tempInput);
} else {
  alert("Введіть коректне число температури");
}

let user = {
  name: "user",
  email: "user_email@example.com",
  password: "12345",
  login(email, pass) {
    if (email === this.email && pass === this.password) {
      alert("Вхід успішний");
    } else {
      alert("Невірний email або пароль");
    }
  }
};

let email = prompt("Введіть email");
let pass = prompt("Введіть пароль");
user.login(email, pass);

let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,
  isHighRated() {
    return this.rating > 8;
  }
};

console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
console.log("Високий рейтинг:", movie.isHighRated());
