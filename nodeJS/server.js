var http = require("http");
var url = require("url");

var server = http.createServer();

server.on("request",function(req,res) {
	var date = new Date();
	var path = urlData["pathname"];
	var valor=fs.readFileSync(path);
	var current_minute= date.getMinutes();
	var current_hour = date.getHours(); 
	var urlData = url.parse(req.url,true);

	res.end(JSON.stringify(current_hour)+":"+JSON.stringify(current_minute) + "\n" + JSON.stringify(urlData) + JSON.stringify(valor));
});

server.listen(process.env.PORT || 3000);