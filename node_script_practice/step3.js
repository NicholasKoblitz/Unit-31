const fs = require("fs");
const axios = require("axios");

function makeFile(filePath, fileInfo) {
    fs.writeFile(filePath, fileInfo, "utf8", (err) => {
        if(err) {
            console.log(err);
            process.exit(1);
        }
        console.log("Wrote to file");
    })
}

function cat(path) { 
    if(process.argv[2] === "--out") {
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            else {
                makeFile(process.argv[3], data);

            }
        })
    }
    else {
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
}

async function webCat(url) {
    try {
        const link = await axios.get(url)
        console.log(link.data)
        return link.data;
    }
    catch (error) {
        console.log("404: Site not found")
    }


}

async function webMakeFile(filePath, fileInfo) {
    const link = await axios.get(fileInfo)
    const content = link.data

    fs.writeFile(filePath, String(content), "utf8", (err) => {
        if(err) {
            console.log(err);
            process.exit(1);
        }
        console.log("Wrote to file");
    })
}


if(process.argv[2] === "--out") {
    if(process.argv[4].startsWith("http://") || process.argv[4].startsWith("https://")) {
        webMakeFile(process.argv[3], process.argv[4])
    }
    else {
        cat(process.argv[4])
    }
}
else if(process.argv[2].startsWith("http://") || process.argv[2].startsWith("https://")) {
    webCat(process.argv[2])
}
else if(process.argv[2] !== null) {
    cat(process.argv[2]);

}
else {
    const path = "";
    cat(path);
}