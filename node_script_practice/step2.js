const fs = require("fs");
const axios = require("axios");


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

async function webCat(url) {
    try {
        const link = await axios.get(url)
        console.log(link.data)
    }
    catch (error) {
        console.log("404: Site not found")
    }


}



if(process.argv[2].startsWith("http://") || process.argv[2].startsWith("https://")) {
    webCat(process.argv[2])
}
else if(process.argv[2] !== null) {
    cat(process.argv[2]);

}
else {
    const path = "";
    cat(path);
}
