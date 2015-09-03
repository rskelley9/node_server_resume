var http = require('http');
var fs = require("fs");

var port = 1337

http.createServer(function (req, res) {

	fs.readFile('ryan_kelley.txt', function (err, data) {
		if (err) return console.error(err);
    console.log("serving 'ryan_kelley.txt'");

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data.toString());
  });
}).listen(port, "127.0.0.1");

console.log("Your node server running at http://127.0.0.1:" +port+ "/");
console.log("Program Ended");
