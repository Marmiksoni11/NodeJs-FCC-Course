
const { readFile , writeFile } = require("fs").promises

const start = async() => {
    try{
        const first = await readFile('./Content/subfolder/first.txt','utf8')                   
        const second = await readFile('./Content/subfolder/second.txt','utf8')
        await writeFile('./Content/subfolder/Result-Async.txt',`This is Result-Async and the Result is : ${first} and ${second}`,{ flag : 'a' })
        console.log(first);
        console.log(second);
    }
    catch(err){
        console.log(err);
    }
}

start()

