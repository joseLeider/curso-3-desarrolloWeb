function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido; 
    }
}

/* prototype es un objeto asociado a las funciones constructoras en JavaScript.
Permite agregar propiedades y métodos compartidos entre todas las instancias creadas con el constructor, sin tener que definirlas en cada instancia. */

// Agregamos una propiedad 'tel' al prototipo de la clase Persona
Persona.prototype.tel = '58546468'; // Todas las instancias de Persona tendrán esta propiedad por defecto

// Creamos un objeto 'padre' con el constructor Persona
let padre = new Persona('Juan', 'Perez', 'perez@gmail.com');
padre.tel = '98846848';// Sobrescribimos el valor de 'tel' solo para este objeto
console.log(padre.tel); // Output: '98846848' (el valor modificado en la instancia)

// Creamos otro objeto 'madre' con el constructor Persona
let madre = new Persona('Sofía', 'Ruiz', 'ruiz@gmail.com');
console.log(madre.tel); // Output: '58546468' (el valor por defecto definido en el prototipo)