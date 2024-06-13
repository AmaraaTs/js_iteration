// bodlogo1

let a1 = 10;
for (let i = 1; i <= a1; i++) {
  console.log("Bodlogo1: ", i);
}

// bodlogo2

let a2 = 10;
for (let i = 1; i <= a2; i = i + 2) {
  console.log("Bodlogo2: ", i);
}

// bodlogo3

let a3 = 10;
for (let i = 2; i <= a3; i = i + 2) {
  console.log("Bodlogo2: ", i);
}

// bodlogo4

let sum4 = 0;
let a4 = 0;
for (let i = 1; i <= 100; i++) {
  a4 = a4 + 1;
  sum4 = sum4 + a4;
}
console.log("Bodlogo4: ", sum4);

// bodlogo5

let sum5 = 0;
let a5 = 0;
let n5 = 101;
for (let i = 1; i <= n5; i++) {
  a5 = a5 + 1;
  sum5 = sum5 + a5;
}
console.log("Bodlogo5: ", sum5);

// bodlogo6

let fac6 = 1;
let a6 = 0;
let n6 = 4;
for (let i = 1; i <= n6; i++) {
  a6 = a6 + 1;
  fac6 = fac6 * a6;
}
console.log("Bodlogo6: ", fac6);

//bodlogo7

let a7 = 123;
let digit7 = 0;
let sum7 = 0;
while (a7 !== 0) {
  digit7 = a7 % 10;
  a7 = a7 - digit7;
  a7 = a7 / 10;
  sum7 = sum7 + digit7;
}
console.log("Bodlogo7: ", sum7);

//bodlogo8

let a8 = 1234;
let digit8 = 0;
let sum8 = 0;
while (a8 !== 0) {
  digit8 = a8 % 10;
  a8 = a8 - digit8;
  a8 = a8 / 10;
  if (digit8 % 2 == 0) {
    sum8 = sum8 + digit8;
  }
}
console.log("Bodlogo8: ", sum8);

//bodlogo9

let n9 = 15;
let sum9 = 0;
for (let i = 1; i <= n9; i = i + 2) {
  console.log("Bodlogo9: ", i);
  sum9 = sum9 + i;
}
console.log("Bodlogo9: ", sum9);

//bodlogo10

let n10 = 15;
let sum10 = 0;
for (let i = 2; i <= n9; i = i + 2) {
  console.log("Bodlogo10: ", i);
  sum10 = sum10 + i;
}
console.log("Bodlogo10: ", sum10);

//bodlogo11

let a11 = 123;
let digit11 = 0;
let sum11 = 0;
while (a11 !== 0) {
  digit11 = a11 % 10;
  a11 = a11 - digit11;
  a11 = a11 / 10;
  sum11 = sum11 * 10 + digit11;
}
console.log("Bodlogo11: ", sum11);
