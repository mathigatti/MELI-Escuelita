var http = require("http");

var server = http.createServer();


server.on("request",function(req,res) {
	var date = new Date();
	var current_minute= date.getMinutes(); 
	var current_hour = date.getHours(); 
	res.end(JSON.stringify(current_hour)+":"+JSON.stringify(current_minute) + "\n");
});

server.listen(process.env.PORT || 3000);