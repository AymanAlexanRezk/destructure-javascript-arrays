import "./styles.css";

function calculate(a, b) {
  let addTwoNums = a + b;
  let subtractTwoNums = a - b;
  let divideTwoNums = a / b;
  let multiplyTwoNums = a * b;

  return [addTwoNums, subtractTwoNums, divideTwoNums, multiplyTwoNums];
}

const [add, subtract, divide, multiply] = calculate(5, 10);

const result = `${add} ${subtract} ${divide} ${multiply}`;
document.getElementById("app").innerHTML = result;
