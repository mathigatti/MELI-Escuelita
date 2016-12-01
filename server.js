var http = require("http");
var url = require("url");
var fs=require('fs');

var server = http.createServer();

server.on("request",function(req,res) {
	var date = new Date();
	var current_minute= date.getMinutes();
	var current_hour = date.getHours(); 

	var urlData = url.parse(req.url,true);
	var path = urlData["pathname"];
//	var valor=fs.readFileSync(path);
	try {
	    // Query the entry
	    	if(path == "/"){
		    	var data = fs.readFileSync("public/web1/index.html");
	    	}
	    	else{
	    		var data = fs.readFileSync("public/web1/" + path);
	        }
	        res.end(data);
	}
	catch (e) {
	    console.log("No request handler found for " + path);
	    res.writeHead(404, {"Content-Type": "text/plain"});
	    res.write("404 Not found");
	    res.end();
	}

});

server.listen(process.env.PORT || 3000);