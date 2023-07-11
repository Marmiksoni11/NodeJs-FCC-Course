// path module 

const path = require('path');

// console.log(path.sep);  

const filePath = path.join("/content","subfolder","test.txt");
// console.log(filePath);

const base = path.basename(filePath);
// console.log(base); //baseFile name  : i.e. in our case test.txt 

const absolute = path.resolve(__dirname,"content","subfolder","test.txt");
console.log(absolute);