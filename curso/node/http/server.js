/**
 * Created by julian on 17/10/15.
 */
var http = require('http');

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Mi primer servidor</h1>');
}).listen(8080);

console.log('Nuestro server corre en el puerto 8080');

