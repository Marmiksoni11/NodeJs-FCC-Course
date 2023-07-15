const  EventEmitter = require("events")


const customEmitter = new EventEmitter()

customEmitter.on('response',(name,age)=>{
    console.log('data Recieved',name,age);
})



customEmitter.on('response',()=>{
    console.log('Some other Logic');
})

customEmitter.emit('response','marmik',21)


// const http = require("http")

// const server = http.createServer()

// server.on('request',(req,res)=>{
//     res.end('WELCOME')
// })

// server.listen(8000,()=>{
//     console.log("listening on port 8000 ... ");
// })
