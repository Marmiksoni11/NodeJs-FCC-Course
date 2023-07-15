
const { readFile , writeFile } = require("fs");

const util = require("util")

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try{
        const first = await readFilePromise('./Content/subfolder/first.txt','utf8')                   
        const second = await readFilePromise('./Content/subfolder/second.txt','utf8')
        await writeFilePromise('./Content/subfolder/Result-Async.txt',`This is Result-Async and the Result is : ${first} and ${second}`,{ flag : 'a' })
        console.log(first);
        console.log(second);
    }
    catch(err){
        console.log(err);
    }
}

start()