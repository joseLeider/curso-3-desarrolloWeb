// Definición de la clase Persona
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre; // Usamos un guion bajo para distinguir las propiedades internas de los metodos
        this._apellido = apellido;
    }

    // Método getter para obtener el nombre
    get nombre() {
        return this._nombre;
    }

    // Método setter para cambiar el nombre
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

}

// Creación de instancias de la clase Persona
let persona1 = new Persona('Jose', 'Rodriguez');
console.log(persona1.nombre); // Accedemos al nombre usando el getter

persona1.nombre = 'Juan'; // Modificamos el nombre usando el setter
console.log(persona1.nombre); // Nuevo nombre