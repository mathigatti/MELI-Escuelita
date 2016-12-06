  var http = require('http')
  , util = require('util')
  , mu   = require('mu2');

mu.root = './public/web1/';

  http.createServer(function (req, res) {

  var stream = mu.compileAndRender('index.html', {name: "john"});
  stream.pipe(res);

}).listen(8000);