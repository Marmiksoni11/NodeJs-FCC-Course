const http = require("http");

const {readFileSync} = require('fs');

const first  = readFileSync("0_Hello.html","utf-8")

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(first)
    }
    else if(req.url === '/about'){
        res.end("<h1>This is the About Us Page</h1>")
    }
    else if(req.url === '/contact'){
        res.end("<h1>This is the Contact Us Page</h1>")
    }
    else{
        res.end(`<h1>Oops Cant Seem To Find Your Page</h1>
            <a href="/">Back Home</a>`)
    }
    // res.write("<h2>Hello World ! , Welcome to Our Home Page</h2>")
    // res.end()
}) 

server.listen(5000);