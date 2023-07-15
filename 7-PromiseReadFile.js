
const {readFile} = require("fs");

// Normal way of reading a file.  

// readFile('.Content/subfolder/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     else{
//         console.log(result);
//     }

// })

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

getText('./Content/subfolder/first.txt')


.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err);
})