/*
    async simplifica el manejo de promesas al eliminar la necesidad de usar new Promise.
    Las funciones async devuelven automáticamente una promesa.
    Si dentro de la función async usas return, el valor retornado se convierte en el valor resuelto de la promesa.
    async simplifica y mejora la legibilidad del manejo de operaciones asíncronas. 
*/


// Declaramos una función asíncrona con la palabra clave 'async'.
// Esto indica que la función siempre devolverá una promesa.
async function funcionConPromesa() {

    // La instrucción 'return' devuelve un valor.
    // Este valor ('Saludos con promesa y async') será automáticamente envuelto en una promesa resuelta.
    return 'Saludos con promesa y async';
}

// Llamamos a la función 'funcionConPromesa()', que devuelve una promesa.
// Usamos el método '.then()' para manejar el valor resuelto de la promesa.
// El valor resuelto es el resultado del 'return' dentro de la función.
funcionConPromesa().then(valor => console.log(valor));
