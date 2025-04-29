let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

for (let j = 2; j <= 20; j++) {
  if (j % 2 === 0) {
    continue;
  }
  console.log(j);
}

for (let k = 1; k <= 10; k++) {
  console.log("7 x " + k + " = " + (7 * k));
}

let n = 6;
while (true) {
  if (i >= n) {
    break;
  }
  console.log(i);
  i++;
}

let x = 1;
while (x <= 20) {
  if (x % 3 === 0) {
    x++;
    continue;
  }
  console.log(x);
  x++;
}