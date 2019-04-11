var http = require('http');

var handleRequest = function(request, response) {
  console.log(new Date() + ' :: Received request for URL: ' + request.url);
  response.writeHead(200);
  const responseText = '<!DOCTYPE html>'
    + '<html>'
    + '  <head><meta name=\'robots\' content=\'none\' /></head>'
    + '  <body><h1>' + new Date() + ' :: Hello World!</h1></body>'
    + '</html>';
  response.end(responseText);
};

var www = http.createServer(handleRequest);
www.listen(8181);
