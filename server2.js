var http = require("http");
var url = require("url");
var fs=require('fs');
var mu = require('mu2');

//var noticiasServices = require('./public/web1/noticias');
var server = http.createServer();

mu.root = "./";


var page = {};

server.on("request",function(req,res) {
    var urlData = url.parse(req.url,true);
    var path = urlData["pathname"];
    var pathInformation = path.split('.');

    if (path == "/" || pathInformation[pathInformation.length-1] == 'html'){
        try {
            if(path == "/"){
                var stream = mu.compileAndRender("public/web1/index.html", {name: "Mathias"});
            }
            else {
                // Query the entry
                var stream = mu.compileAndRender("public/web1/" + path, {name: "Mathias"});
            }
            res.end();
        }
        catch (e) {
            console.log("No request handler found for " + path);
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404 Not found");
            res.end();
        }
    }
    else{
        try {
            // Query the entry
            var data = fs.readFileSync("public/web1/" + path);
            res.end(data);

        }
        catch (e) {
            console.log("No request handler found for " + path);
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404 Not found");
            res.end();
        }
    }
});

server.listen(process.env.PORT || 3000);