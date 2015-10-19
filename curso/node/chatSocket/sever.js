var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);


//get sirve para obtener la url
app.get('/',function(req,res){
    res.sendFile( __dirname + '/index.html');
    console.log('Se a cargado el archivo index.html');
});

//Iniciar socket.io
io.on('connection', function(socket){
    socket.on('message',function(msg){
        io.emit('message', msg);
    });
    console.log('Se a conectado un usuario');
})

io.on('close',function(secket){
    console.log('Un usuario se ha ido');
});

http.listen(8080, function () {
    console.log('El servidor corre en el puerto 8080');
});
