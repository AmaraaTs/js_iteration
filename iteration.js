// let sum = 1 + 2 + ... + 100
let sum = 0;
let too = 0;
for (let tooluur = 1; tooluur <= 100; tooluur++) {
  //   console.log("Tooluuriin utga: ", tooluur);
  too = too + 1;
  //   too += 1;
  //   too++;
  sum = sum + too;
}
console.log("sum: ", sum);

let i = 0;
sum1 = 0;
while (i <= 100) {
  sum1 = sum1 + i;
  i++;
}
console.log("While: ", sum1);

let j = 0;
sum2 = 0;
do {
  sum2 = sum2 + j;
  j++;
} while (j <= 100);

console.log("doWhile: ", sum2);
