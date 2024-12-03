/*
    Un objeto en JavaScript es una estructura de datos que permite almacenar información como pares de clave-valor.
    Es útil para representar entidades complejas con propiedades relacionadas, como una persona, un vehículo o un producto.
    Sirven para organizar datos y manipularlos de manera lógica.
*/

// Creamos un objeto 'persona' con varias propiedades clave-valor
let persona = {
    nombre: 'Pablo', // Propiedad 'nombre' con el valor 'Pablo'
    apellido: 'Ruiz',
    email: 'ruiz@gmail.com',
    edad: 45
}

// Accedemos y mostramos el valor de la propiedad 'nombre'
console.log(persona.nombre); 
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);

// Imprimimos el objeto completo
console.log(persona);