/*
    Una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. Sirve para manejar
    operaciones asincrónicas, como solicitudes a un servidor, lectura de archivos, etc., de una forma más ordenada y comprensible que las tradicionales "callbacks".

    Estados de una promesa:

        Pendiente (Pending): Cuando la operación aún no ha terminado.
        Resuelta (Fulfilled): Cuando la operación termina exitosamente.
        Rechazada (Rejected): Cuando la operación falla.
*/

// Definimos una variable miPromesa que almacena una instancia de un objeto Promise.
// Al constructor de Promise le pasamos como argumento una función de tipo callback, que a su vez tiene dos parámetros:
// resolver y rechazar. Estas son funciones que se usarán para indicar si la promesa se resuelve o se rechaza.
let miPromesa = new Promise((resolver, rechazar) => {
    // Inicializamos una expresión lógica que será evaluada
    let expresion = false;

    // Si la expresión es verdadera, resolvemos la promesa como resuelta exitosamente, pasando un mensaje.
    if(expresion)
        resolver('Resolvió correcto'); // Llamamos a resolver() con el mensaje de éxito
    else
        // Si la expresión es falsa, rechazamos la promesa como rechazada, pasando un mensaje.
        rechazar('Se produjo un error'); // Llamamos a rechazar() con el mensaje de error
});

// Se ejecuta la promesa y se define cómo manejar sus resultados

// Forma alternativa de manejar éxito y error directamente en el then().
// miPromesa.then(valor => console.log(valor), error => console.log(error));

// Usamos .then() para procesar el caso de éxito
miPromesa // Accedemos al objeto promesa almacenado en la variable 'miPromesa'
.then(valor => console.log(valor)) 
// .then() es un método del objeto Promise. 
// Se ejecuta cuando la promesa se resuelve exitosamente (es decir, se llama a resolver()).
// El callback que recibe el método .then() tiene un parámetro, aquí llamado 'valor',
// que contiene el dato pasado a la función 'resolver()'.
// En este caso, se imprimirá en la consola el mensaje de éxito con 'console.log(valor)'.

.catch(error => console.log(error)); 
// .catch() es otro método del objeto Promise.
// Se ejecuta si la promesa es rechazada (es decir, se llama a rechazar()).
// El callback que recibe el método .catch() tiene un parámetro, aquí llamado 'error',
// que contiene el dato pasado a la función 'rechazar()'.
// En este caso, se imprimirá en la consola el mensaje de error con 'console.log(error)'.


