// Get the first argument
const arg = process.argv[2];
const times = parseInt(arg, 10);

if (isNaN(times)) {
    console.log("Missing number of occurrences");
} else {
    let i = 0;
    let output = "";
    while (i < times) {
        output += "C is fun\n";
        i++;
    }
    console.log(output.trim());
}
