/*
    La herencia permite que una clase (subclase) tome las propiedades y métodos de otra clase (superclase).
    En este caso, Empleado hereda de Persona, reutilizando su lógica e incorporando nuevas funcionalidades como el manejo del departamento.
    Esto facilita la reutilización del código y la extensibilidad.

    extends: Se usa para indicar que una clase es una subclase de otra. Esto establece la relación de herencia.
    super: Se utiliza para llamar al constructor o métodos de la clase padre (superclase). Es obligatorio para poder acceder con this.
*/

// Definición de la clase base Persona
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(setNombre) {
        this._nombre = setNombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(setApellido){
        this._apellido = setApellido;
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    // Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        /*
            Se aplica polimorfismo (multiples formas en tiempo de ejecución) el metodo que se ejecuta depende si es una
            referencia de tipo padre o de tipo hijo
        */
       return this.nombreCompleto();
    }
}

// Definición de la clase Empleado que hereda de Persona
class Empleado extends Persona{
    // Recibe los parametros de nombre y apellido de la clase Persona y de esta clase el parametro departamento
    constructor(nombre, apellido, departamento){
       // Llama al constructor de Persona con los argumentos necesarios
        super(nombre, apellido);
        // Nueva propiedad específica de Empleado
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(setDepartamento){
        this._departamento = setDepartamento;
    }

    // Sobreescritura del método nombreCompleto() de Persona. Es util para extender la funcionalidad del metodo en la subclase
    nombreCompleto(){
        // Llama al método nombreCompleto() de la clase base usando super y concatena
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Jose', 'Rodriguez');
console.log(persona1);

// Crear una instancia de Empleado
let empleado1 = new Empleado('Paula', 'Puentes', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);

// Se hereda un metodo de la clase Persona y obtenemos el resultado
console.log(empleado1.nombreCompleto());

// Llama al método nombreCompleto() de la clase Empleado (sobreescrito)
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());