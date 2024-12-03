// Otra forma de crear objetos: usando el constructor 'Object'

let persona = new Object(); // new Object(): Crea un objeto vacío.

// Agregamos propiedades al objeto 'persona' usando la notación de punto (obj.propiedad = valor).
persona.nombre = 'Sebastian';
persona.direccion = 'San Francisco';
persona.telefono = '15426298454'; // Propiedad 'telefono' con el valor '15426298454'

console.log(persona.telefono);


// Otra forma de acceder a las propiedades de un objeto: usando la notación de corchetes
console.log(persona['direccion']); // Output: 'San Francisco'
// En este caso, accedemos a la propiedad 'direccion' del objeto 'persona' como si fuera un índice.

// Usamos un bucle 'for...in' para iterar sobre las propiedades del objeto
for (let nombrePropiedad in persona) {
    // Imprimimos el nombre de la propiedad (clave)
    console.log(nombrePropiedad); 
    // Output: 'nombre', 'direccion', 'telefono' (cada propiedad del objeto)

    // Imprimimos el valor de la propiedad usando la notación de corchetes
    console.log(persona[nombrePropiedad]); 
    // Output: 'Sebastian', 'San Francisco', '15426298454' (valores correspondientes)
}


// Agregar propiedades al objeto
persona.edad = 54;
persona.email = 'sebastian@gmail.com';
console.log(persona);


// Eliminar una propiedad junto con su valor de un objeto
delete persona.email;
console.log(persona);


// Formas de imprimir un objeto en JavaScript

// 1. Concatenar los valores de las propiedades manualmente
console.log(persona.nombre + ', ' + persona.direccion + ', ' + persona.telefono + ', ' + persona.edad); 
// Output: 'Sebastian, San Francisco, 15426298454, 54'

// 2. Usar un bucle 'for...in' para imprimir los valores de cada propiedad
for (let nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]); 
    // Output: Imprime cada valor de las propiedades del objeto
}

// 3. Convertir el objeto a un array con 'Object.values'
let personaArray = Object.values(persona); 
console.log(personaArray); 
// Output: ['Sebastian', 'San Francisco', '15426298454', 54]

// 4. Convertir el objeto a un string en formato JSON con 'JSON.stringify'
let personaString = JSON.stringify(persona); 
console.log(personaString); 
// Output: '{"nombre":"Sebastian","direccion":"San Francisco","telefono":"15426298454", "edad":54}'