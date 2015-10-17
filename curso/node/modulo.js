/**
 * Created by julian on 17/10/15.
 */
var prompt = require('prompt');

prompt.start();

var rutina = function() {
    prompt.get([{
        message: '¿Como te llamas?',
        name: 'nombre'
    },{
        message: '¿Cuantos años tienes?',
        name: 'edad'
    },{
        message: '¿Donce naciste?',
        name: 'pais'
    }
    ],function(err,result){
        if(err){
            console.log(err);
        }

        var nombre = result.nombre,
            edad   = result.edad,
            pais   = result.pais;

        console.log("Hola me llamo " + nombre + ' soy de ' + pais + ' y tengo ' + edad + ' años');
    })
};


exports.modules;