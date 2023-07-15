const {writeFileSync} = require("fs")
for(let i=0;i<10000;i++){
    writeFileSync(`./Content/subfolder/BigFile.txt`,`Hello World ${i}\n`, { flag : 'a' })
}