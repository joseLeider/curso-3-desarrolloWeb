/*
El switch es una estructura de control condicional que se usa para evaluar una variable o expresión y ejecutar diferentes 
bloques de código según su valor. Es similar a una serie de if-else, pero más ordenado y legible cuando hay múltiples opciones.*/

let numero = 4;

let numeroTexto = 'Valor desconocido';

switch (numero) {
    case 1:
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
        break;
}

console.log(numeroTexto);