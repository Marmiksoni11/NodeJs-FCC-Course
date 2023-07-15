const { createReadStream }  = require("fs")

//*  default 64Kb
//*  last buffer - remainder
//*  highWaterMark - control size
//*  encoding: utf-8

//! below we kept the size 90kb and the actual file size is 169 Kb which means we get two buffers in the console : 

//! first of 90Kb and next one the remainder i.e. 169-90 = 79Kb. 

const stream = createReadStream('./Content/subfolder/BigFile.txt' , { highWaterMark : 90000, encoding:'utf-8' } )

stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=>{
    console.log(err);
})