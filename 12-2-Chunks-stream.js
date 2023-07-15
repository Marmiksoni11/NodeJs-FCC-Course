var http = require("http")
var fs = require("fs")

http
.createServer((req,res)=>{
    // const text = fs.readFileSync('./Content/subfolder/BigFile.txt','utf8')
    // res.end(text)

    //! using below syntax we can send data in chunks and not as one whole file.

    const fileStream = fs.createReadStream('./Content/subfolder/BigFile.txt','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})

.listen(5000)