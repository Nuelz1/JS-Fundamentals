// Get the first argument
const arg = process.argv[2];

// Convert argument to integer
const num = parseInt(arg, 10);

// Check if it is a valid number
if (!isNaN(num)) {
    console.log("My number: " + num);
} else {
    console.log("Not a number");
}
