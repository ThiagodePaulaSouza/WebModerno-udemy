const factorial = x => {
    if (x == 0) {
        return 1;
    }
    return x * factorial(x - 1)
}

console.log(factorial(1))   // 1
console.log(factorial(2))   // 2
console.log(factorial(3))   // 6
console.log(factorial(4))   // 24
console.log(factorial(5))   // 120
console.log(factorial(6))   // 720
console.log(factorial(7))   // 5040
console.log(factorial(8))   // 40320
console.log(factorial(9))   // 36280
console.log(factorial(10))  // 362800