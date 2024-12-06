/* 
    Una clase es un modelo o plantilla que define las propiedades (atributos) y comportamientos (métodos) de los objetos que se
    crean a partir de ella. En este caso, la clase Persona define que cada objeto Persona tendrá un nombre y un apellido.
*/

// Definición de una clase llamada 'Persona'
class Persona {
    // Constructor: Método especial para inicializar propiedades al crear una instancia de la clase
    constructor(nombre, apellido) {
        this.nombre = nombre; // Propiedad 'nombre' se inicializa con el valor recibido
        this.apellido = apellido; // Propiedad 'apellido' se inicializa con el valor recibido
    }
}

// Creación de una instancia de la clase Persona. Una instancia es un objeto creado a partir de una clase.
let persona1 = new Persona('Jose', 'Rodriguez'); // Se crea un objeto con nombre 'Jose' y apellido 'Rodriguez'
console.log(persona1);
// Creación de otra instancia de la clase Persona
let persona2 = new Persona('Marcos', 'Rojas'); // Se crea un objeto con nombre 'Marcos' y apellido 'Rojas'
console.log(persona2);
