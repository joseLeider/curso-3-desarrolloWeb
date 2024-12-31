// Creamos una nueva promesa y la almacenamos en la variable 'miPromesa'.
// La promesa recibe una función callback con un parámetro 'resolver', que se usará para resolver la promesa.
let miPromesa = new Promise((resolver) => {

    console.log('Inicio promesa');

    // Usamos setTimeout para simular una operación asíncrona.
    // Después de 3000 milisegundos (3 segundos), llamamos a 'resolver' con un mensaje.
    setTimeout(() => resolver('Saludos con promesa y timeout'), 3000);

    console.log('Fin promesa');
});

// Usamos el método .then() para manejar el valor resuelto de la promesa.
// La función callback recibe el valor resuelto y lo imprime en la consola.
miPromesa.then(valor => console.log(valor));
