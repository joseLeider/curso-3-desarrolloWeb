'use strict'
/* 
    Un try-catch es un mecanismo utilizado en la programación para manejar errores o excepciones que pueden ocurrir durante la ejecución de un programa.
    Sirve para evitar que el programa termine abruptamente al encontrar un error y en su lugar, permite realizar acciones específicas como mostrar un mensaje o intentar una solución alternativa.

    El bloque finally se ejecuta siempre, sin importar si se lanzó o no una excepción en el bloque try o si se manejó en el bloque catch.
    Se utiliza para realizar tareas de limpieza, como cerrar conexiones, liberar recursos o ejecutar código que debe ejecutarse sin importar lo que ocurra en los bloques try o catch.
*/

// try catch se encarga de manejar las excepciones y los errores en una parte del código para evitar que el programa se detenga.

try {
    // Encapsula el código que podría generar errores
    x = 10; // 'x' no está definida
    
} catch (error) {
    // Manejo del error y muestra la información al respecto
    console.log(error);
}finally {
    // Código que siempre se ejecuta, es opcional.
    console.log('Termina la revisión de errores');
}

// El programa continúa ejecutándose
console.log('Continuamos...');