let num1 = Number(prompt("Enter First number"));
let num2 = Number(prompt("Enter Second number"));

let operator = prompt("Enter operator (either +, -, * or /)");

if (operator === '+') {
    alert("Addition =" + (num1 + num2));
}

if (operator === '-') {
    alert("Substraction =" + (num1 - num2));
}

if (operator === '*') {
    alert("Multiplication =" + (num1 * num2));
}

if (operator === '/') {
    alert("Division =" + (num1 / num2));
} else{
    alert("Invalid operator");
}
