const arg = process.argv[2];
const times = parseInt(arg, 10);

if (times > 0) {
    let output = "";
    let i = 0;
    while (i < times) {
        output += "C is fun\n";
        i++;
    }
    console.log(output.trim());
}
