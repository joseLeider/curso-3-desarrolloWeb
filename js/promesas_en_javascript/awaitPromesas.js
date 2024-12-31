// Declaramos una función asíncrona utilizando la palabra clave 'async'.
// Esto permite usar 'await' dentro de la función para manejar promesas.
async function funcionConPromesaYawait() {

    // Creamos una nueva promesa manualmente usando 'new Promise'.
    // La promesa se resuelve inmediatamente con el valor 'Promesa con await'.
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await'); // Resolvemos la promesa.
    });

    // Usamos 'await' para esperar a que la promesa 'miPromesa' se resuelva.
    // Esto pausa la ejecución de la función hasta que 'miPromesa' esté resuelta.
    // El valor resuelto ('Promesa con await') se pasa a 'console.log'.
    console.log(await miPromesa);
}

// Llamamos a la función 'funcionConPromesaYawait()'.
// Como es asíncrona, devuelve una promesa, pero no usamos .then() porque no hay un valor devuelto aquí.
// Se ejecuta la lógica interna de la función.
funcionConPromesaYawait();



// await solo se puede usar dentro de una función declarada con async
// Usar new Promise dentro de una función async tiene sentido cuando quieres crear una promesa personalizada o realizar una tarea asíncrona manualmente, como en el caso de operaciones de temporizador (setTimeout), llamadas a APIs, etc.