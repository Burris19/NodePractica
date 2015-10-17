/**
 * Created by julian on 17/10/15.
 */
/*
var fruteria = {
    'nombre'    : 'Fruteria Nodejs',
    'dueño'     : 'Julian Hernandez',
    'productos' : {
        'frutas'    : 'mango, fresa y mango',
        'exoticas'  : 'papaya, sandia'
    }
}
console.log('Bienvenido a la ' + fruteria.nombre + ' de ' + fruteria.dueño + ' donde encontraras ' + fruteria.productos.frutas + fruteria.productos.exoticas );
*/

var conductor = {
    'deracha' : function(){
        console.log('giro a la derecha');
    },
    'izquierda' : function(){
        console.log('giro a la izquierda');
    },
    'avanzar' : function(){
        console.log('avanzo');
    },
    'retroceder' : function(){
        console.log('retrocedo');
    }
}

conductor.avanzar();
conductor.retroceder();
conductor.izquierda();
conductor.deracha();