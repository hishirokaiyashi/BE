const http = require("http")

const port = 8061;
const server = http.createServer(function (req,res){
    if(req.url=="/"){
        //check the userSelect: 
        //set response header
        res.writeHead(200, {"Content-Type":"text/html"});
        //set response content:
        res.write("<html><body><p>This is home Page.</p></body></html>");
        res.end();
    }
    else if(req.url == "/node"){
        res.writeHead(200, {"Content-Type":"text/html"});
        //set response content:
        res.write("<html><body><p>This is node Page.</p></body></html>");
        res.end();
    }
    else if(req.url == "/java"){
        res.writeHead(200, {"Content-Type":"text/html"});
        //set response content:
        res.write("<html><body><p>This is java Page.</p></body></html>");
        res.end();
    }
    else res.end("Invalid Request!");
    }
);

server.listen(port);
console.log(`server is running at port ${port}`);