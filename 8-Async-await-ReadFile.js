
const {readFile} = require("fs");

// Promise Way of reading a file.

const getText = (path) => {

    return new Promise((resolve,reject)=>{

        readFile(path,'utf8',(err,result)=>{

            if(err){
                reject(err);
            }
            else{
                resolve(result);
            }
        })
        
        
    })    
}

// getText('./Content/subfolder/first.txt')


// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err);
// })

// 

// Asyn-await Readinf of Multiple Files

const start = async() =>{
    try{
        const first = await getText('./Content/subfolder/first.txt')
        const second = await getText('./Content/subfolder/second.txt')
        console.log(first);
        console.log(second);
    }
    catch(err){
        console.log(err);
    }
}

start()

// Before we did the above using callbacks and it turned out to become a CallBack Hell in file number : 3-3-2_FS_Async 

// But now it became easy and managable using async-await.