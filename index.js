const http=require('http');

const hostname='localhost';
const port=3000;

//req and res are incoming request and response from server

const server=http.createServer((req,res)=>{
    console.log(req.headers);

    res.statusCode= 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Hello, World!</h1></body></html>');

})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});