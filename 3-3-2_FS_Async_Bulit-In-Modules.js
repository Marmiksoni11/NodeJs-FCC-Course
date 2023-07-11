const { readFile , writeFile } = require('fs');

readFile('./Content/subfolder/first.txt',"utf8",(err, result)=>{

    if(err){
        console.log(err);
        return;
    }
    
    const first = result;

    readFile('./Content/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
    
        writeFile('./Content/subfolder/Result-Async.txt',`This is Result-Async and the Result is : ${first}and ${second}`,{ flag : 'a' },(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        });  

    })
});


