/*
    setTimeout: Es una función de JavaScript que ejecuta una función (callback) después de un tiempo específico (en milisegundos).
    No bloquea el flujo de ejecución del programa, lo que significa que el código sigue ejecutándose mientras espera.
*/

// Definimos una función de callback para ser ejecutada de manera asíncrona después de un tiempo específico
function funcionCallback(){
    console.log('Saludo asíncrono despues de 3 segundos');
}

// Llamamos a setTimeout, que ejecutará la función 'funcionCallback' después de 3000 ms (3 segundos)
setTimeout(funcionCallback, 3000);

// Usamos una función anónima como callback en setTimeout para mostrar un mensaje en la consola después de 4000 ms (4 segundos)
setTimeout(function(){ 
    console.log('Saludo asíncrono 2');
}, 4000);

// Utilizamos una función flecha como callback en setTimeout para mostrar un mensaje en la consola después de 1000 ms (1 segundo)
setTimeout(() => { 
    console.log('Saludo asíncrono 3');
}, 1000);
