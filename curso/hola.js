/**
 * Created by julian on 17/10/15.
 */
var http = require('http');

http.createServer(function(req,res){
    console.log('Alguien se ha conectdo');
    res.writeHead(200,{'Content-type':'html'});
    res.end('<h1>Hola mundo</h1>');
}).listen(8080);



