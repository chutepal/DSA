function factorial(num) {
    if(num === 1) return 1;
    return num * factorial(num - 1)
}

/**Logic break-up:
 * factorial(4) ===>
 * factorial(4) = 4 * factorial(3)
 * factorial(3) = 3 * factorial(2)
 * factorial(2) = 2 * factorial(1)
 * factorial(1) = 1
 */

console.log(factorial(4));