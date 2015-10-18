/**
 * Created by julian on 17/10/15.
 */
var fileSystem = require('fs');
var prompt = require('prompt');

prompt.start();
prompt.get([{
    message: 'Contenido del README',
    name: 'contenido'
}],function(err,result){
    if(err){
        throw err;
    }else{
        fileSystem.writeFile('README', result.contenido, function(err){
            if(err){
                throw err;
            }else {
                console.log('El archivo README ha sido creado');
            }
        });
    }
});

/*
fileSystem.writeFile('instrucciones.txt','Estas son las instrucciones de un juego que nunca he creado pero pienso hacerlo',function(err){
    if(err){
        throw err;
    }else {
        console.log('El archivo ha sido creado con exito');
        fileSystem.readFile('instrucciones.txt','utf8',function(err,data){
            if(err){
                throw err;
            }else {
                console.log(data);
            }
        })
    }
});
*/