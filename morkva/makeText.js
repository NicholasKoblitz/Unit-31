const {MarkovMachine} = require('./app');
const axios = require("axios");
const fs = require('fs');

if(process.argv[2] === "url") {
    async function read(path) {
        try {
            let res = await axios.get(process.argv[3]);
            const markov = new MarkovMachine(res.data)
            console.log(markov.makeText())
        }
        catch (error) {
            console.log(error)
        }

        
    }

    read(process.argv[3])
}
else if (process.argv[2] === "file") {
    function read(path) {
        fs.readFile(path, "utf8" ,(err, data) => {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            else {
               const markov = new MarkovMachine(data)
               console.log(markov.makeText())
            }
        })
    }

    read(process.argv[3])
}





