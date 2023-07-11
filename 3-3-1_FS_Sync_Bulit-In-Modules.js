const {readFileSync, writeFileSync} = require('fs');

const first  = readFileSync("./Content/subfolder/first.txt","utf-8")
const second  = readFileSync("./Content/subfolder/second.txt","utf-8")

console.log(first);
console.log(second);


// flag a : append the result 
writeFileSync("./Content/subfolder/third.txt",
`This is WriteFileSync and here is the Result : ${first}, ${second}`,{ flag : 'a' }
);