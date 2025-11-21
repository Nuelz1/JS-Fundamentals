const arg = process.argv[2];
const times = parseInt(arg, 10);

if (!isNaN(times)) {
    let i = 0;
    let output = "";
    while (i < times) {
        output += "C is fun\n";
        i++;
    }
    console.log(output.trim());
}
