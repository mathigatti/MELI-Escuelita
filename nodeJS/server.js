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

	res.end(JSON.stringify(current_hour)+":"+JSON.stringify(current_minute) + "\n" + JSON.stringify(urlData));
});

server.listen(process.env.PORT || 3000);