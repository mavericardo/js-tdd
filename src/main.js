const sum = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mult = (num1, num2) => num1 * num2;
const div = (num1, num2) => ((num2 === 0) ? "Não é possível divisão por zero!" : (num1 / num2));

function bla() {
  console.log("bla");
}

function hello() {
  console.log("hello");
}

export {
  sum,
  sub,
  mult,
  div,
};
