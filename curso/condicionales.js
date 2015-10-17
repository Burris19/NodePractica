/**
 * Created by julian on 17/10/15.
 */
var salario = 10000;

if(salario < 1000 ) {
    console.log('Eres millonario');
} else {
    console.log('Hombre trabaja, puedes caer en bancarota');
}

var trabajador = 'jefe';

switch (trabajador) {
    case 'jefe':
        console.log('Hola jefe');
        break
    case 'supervisor':
        console.log('Hola super');
        break
    case 'operador':
        console.log('Hola operador');
        break
    default:
        console.log('No encontrado');
        break
}


