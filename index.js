var http = require('http');
var fs = require('fs');

/*How to call other modules*/
var extract = require('./extract');
var wss = require('./websockets-server');

/*url.substring(1) takes off the first char of the string
fileName = url.substring(1);*/

var handleError = function(err, res) {
    res.writeHead(404);
    res.end();
};


var server = http.createServer(function(req, res) {
    console.log('Responding to a request.');
    var filePath = extract(req.url);
    fs.readFile(filePath, function(err, data) {
        if (err) {
            handleError(err, res);
            return;
        } else {
          console.log(res);
            res.end(data);
        }
    });
});
server.listen(3000);
