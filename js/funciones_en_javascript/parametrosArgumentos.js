// Los parámetros son los nombres de las variables que se definen en la declaración de la función, por lo tanto recibe los argumentos dados.
let sumar = function (a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + c;
}

let resultado = sumar(4,2,8); // Los valores 4, 2, y 8 son los 'argumentos' que se le asignan a los parametros de la función
console.log(resultado);