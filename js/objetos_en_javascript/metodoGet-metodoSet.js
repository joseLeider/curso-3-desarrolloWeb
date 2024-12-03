// El getter (get) es una propiedad especial que actúa como una función dentro de un objeto, pero se accede como si fuera una propiedad.
// Su propósito es calcular y devolver un valor dinámicamente al momento de accederlo, sin necesidad de llamarlo como una función.

// Un método 'set' permite asignar un valor a una propiedad calculada.
// Se usa para controlar o modificar cómo se actualizan las propiedades del objeto.

let persona = {
    nombre: 'Pablo',
    apellido: 'Ruiz',
    email: 'ruiz@gmail.com',
    edad: 45,
    idioma: 'es',
    // Método get para obtener el idioma en mayúsculas
    get lang(){
        return this.idioma.toUpperCase(); // Convierte 'idioma' a mayúsculas y lo devuelve
    },
    // Método set para asignar un nuevo valor al idioma
    set lang(lang){
        this.idioma = lang.toUpperCase(); // Asigna un valor convertido a mayúsculas a 'idioma'
    },
    // Definimos un getter para calcular el nombre completo
    get nombreCompleto(){ // Agregando un metodo en el objeto
        // El getter devuelve una combinación dinámica de 'nombre' y 'apellido'
        return this.nombre + ' ' + this.apellido;
    }
}

// Imprimimos la propiedad 'nombreCompleto' del objeto
console.log(persona.nombreCompleto); 
// Output: 'Pablo Ruiz'
// Aunque 'nombreCompleto' es un método, se accede como si fuera una propiedad normal, sin paréntesis ().



// Usamos el método get 'lang' para obtener el idioma en mayúsculas
console.log(persona.lang); 
// Output: 'ES' (el valor de 'idioma' convertido a mayúsculas)

// Usamos el método set 'lang' para cambiar el idioma
persona.lang = 'en'; 
// Cambia 'idioma' a 'EN' (convertido a mayúsculas por el método set)

// Volvemos a usar el método get 'lang' para verificar el cambio
console.log(persona.lang); 
// Output: 'EN' (nuevo valor de 'idioma' en mayúsculas)

// Imprimimos la propiedad 'idioma' directamente
console.log(persona.idioma); 
// Output: 'EN' (el valor actual de la propiedad después de usar el set)