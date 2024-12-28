/*
    La función setInterval ejecuta repetidamente una función o un fragmento de código con un intervalo de tiempo fijo (en milisegundos) entre cada ejecución.
    Es útil para tareas periódicas como actualizaciones de interfaces o temporizadores. En este caso, actualiza la hora en la consola cada segundo.

    Funciones asincronas permiten que el flujo del programa continúe mientras esperan su turno, ejemplos:
        Las funciones callback dentro de setTimeout es ejecutado de manera asincrónica.
        Los setTimeout no bloquea el flujo principal. Se utiliza para ejecutar una función después de un período de tiempo especificado.
        Los setInterval se ejecuta repetidamente hasta que sea detenido con clearInterval. No bloquean el hilo principal.

    Funciones síncronas bloquean la ejecución del programa hasta que finalizan, ejemplo:
        Las funciones secuenciales, el código posterior no se ejecuta hasta que la función síncrona termine.
*/

// Definimos una función flecha llamada 'reloj'
let reloj = () => {
    // Creamos un objeto 'Date' para obtener la fecha y hora actual
    let fecha = new Date();
    // Mostramos la hora actual en formato HH:MM:SS en la consola
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}

// Usamos 'setInterval' para llamar a la función 'reloj' cada 1000 ms (1 segundo)
setInterval(reloj, 1000);