let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [str, target] = input
console.log(str[target - 1])