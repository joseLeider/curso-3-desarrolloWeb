async function funcionConPromesaAwaitSetTimeout(){
    
    console.log('Inicio función');

    let promesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y setTimeout'), 3000);
    });
    
    // Esperamos a que la promesa 'prom' se resuelva usando 'await'.
    // El valor resuelto ('Hola') es asignado temporalmente aquí.
    console.log(await promesa); // Imprimimos en consola el valor resuelto de la promesa
    console.log('Fin función');
}

// Llamamos a la función 'promesa'.
funcionConPromesaAwaitSetTimeout();