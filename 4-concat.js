// Get the first and second arguments
const firstArg = process.argv[2];
const secondArg = process.argv[3];

// Check if both arguments exist
if (firstArg && secondArg) {
    console.log(firstArg + " is " + secondArg);
} else {
    console.log("Two arguments are required");
}
