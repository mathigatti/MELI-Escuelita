var http = require("http");
var server = http.createServer();
var date = new Date();
var current_minute= date.getMinutes(); 
var current_hour = date.getHours(); 
server.on("request",function(req,res) {
	res.end(JSON.stringify(current_hour)+":"+JSON.stringify(current_minute) + "\n");
});
server.listen(process.env.PORT || 3000);