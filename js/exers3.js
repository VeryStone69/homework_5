//--- Exercise 3 ---  Write a function that outputs the solution C=(M!+N!)/(M+1)!  ---

let n = prompt("Введите 1ое число:");
let m = prompt("Введите 2ое число:");
let c = "";

function result(n, m) {
    c = (factorial(m) + factorial(n)) / (factorial(m - 1));
    alert(c);
}

function factorial(x) {
    let factorialX = 1;
    for (i = 1; i <= x; i++) {
        factorialX *= i;
    }
    return factorialX
}

result(n, m);