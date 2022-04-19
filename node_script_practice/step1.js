const fs = require("fs");


function cat(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        else {
            console.log(data);
        }
    })
}

if(process.argv[2] == null) {
    const path = "";
    cat(path);

}
else {
    const path = process.argv[2];
    cat(path);

}
