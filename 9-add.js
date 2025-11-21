// Get the arguments
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert arguments to integers
const num1 = parseInt(arg1, 10);
const num2 = parseInt(arg2, 10);

// Define the add function
function add(a, b) {
    return a + b;
}

// Print the result
console.log(add(num1, num2));
