const fs = require("fs");

// Write to the file
fs.writeFileSync("welcome.txt", "Hello Node");

// Read from the file
fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});
