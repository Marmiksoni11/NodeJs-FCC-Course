// const {readFile} = require("fs")

// console.log("First task Started");

// readFile("./Content/subfolder/first.txt","utf8",(err,result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(result);
//     console.log("Completed the first task");
// })

// console.log("Starting the Next Task");


// console.log("First");
// setInterval(() => {
//     console.log("Second");
// }, 2000);
// // console.log("second");
// console.log("Third");
    

// below practiced by Me :

// setTimeout(() => {
//     console.log("Check if the setInterval is Interrupted") 
//  }, 10000);

//  const Interval = setInterval(() => {
//      console.log(" Reprint every 1 second ");
//  }, 1000);

//  setTimeout(() => {
//      clearInterval(Interval)
//  }, 10000);

 
// const http = require("http")

// const server = http.createServer((req,res)=>{
//     console.log("request Event");
//     res.end("Hello World")
// });

// server.listen(5000,()=>{
//     console.log("Server Listening on Port : 5000");
// });


const http = require("http")

const server = http.createServer((req,res)=>{

if(req.url === "/"){
    res.end("Home Page")
}

else if(req.url === "/about"){

    // ! BLOCKING CODE 

    for(let i = 0 ; i<1000; i++){
        for(let j = 0; j<1000; j++){
            console.log(`${i} ${j}`)
        }
    }

    res.end("About Page")

}

else{
    res.end("Error Page")
}

})

server.listen(8000,()=>{
    console.log("Server Listening on Port 5000...")
})