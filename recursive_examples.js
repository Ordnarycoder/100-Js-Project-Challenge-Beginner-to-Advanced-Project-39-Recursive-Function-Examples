// Define an array
var arr = [5,6,7]

// Define a function for summing array
function sumArray(arr){
    // If array is empty return zero
    if (arr.length === 0){
        return 0;
    } 
    // Else sum array's first element with sum of array's other elements
    return arr[0] + sumArray(arr.slice(1));
} 

// Print first result
console.log(sumArray(arr))

function findRemainder(number, divider){
    // Base case: If the number is smaller than the divider, return the number itself
    if (number < divider) {
        return number;
    }
    // Recursive case: Subtract divider from number and call the function again
    return findRemainder(number - divider, divider);
}

console.log(findRemainder(10, 3)); 

function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0;  // Fibonacci of 0 is 0
    }
    if (n === 1) {
        return 1;  // Fibonacci of 1 is 1
    }
    // Recursive case: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));  // Output: 8 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8)



