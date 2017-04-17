var path = require('path');

//Assignment 9: Silver Challenge
var mime = require('mime');

var extractFilePath = function(url) {
    var filePath;
    var fileName = 'index.html';
    if (url.length > 1) {
        fileName = url.substring(1);
    }
    console.log('The fileName is: ' + fileName);
    filePath = path.resolve(__dirname, 'app', fileName);

    //Assignment 9: Silver Challenge
    console.log(mime.lookup(filePath));
    return filePath;
};

//How to let other modules access this module's function
module.exports = extractFilePath;
