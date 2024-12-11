class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(setNombre){
        this._nombre = setNombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(setApellido){
        this._apellido = setApellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(setEdad){
        this._edad = setEdad;
    }
    // Los template literals (las comillas invertidas: ``) permiten insertar expresiones dentro de una cadena con ${}.
    toString() {
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`;
    }
    
}


class Empleado extends Persona{
    // Variable estática para contar el número de instancias de Empleado
    static contadorEmpleados = 0;
    
    constructor(nombre, apellido, edad, sueldo){ // Constructor que inicializa un empleado con un sueldo.
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados; // Asigna un ID único al empleado incrementando "contadorEmpleados".
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(setSueldo){
        this._sueldo = setSueldo;
    }

    // Combina la representación de la clase padre con el id y sueldo
    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}


class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(setFechaRegistro){
        this._fechaRegistro = setFechaRegistro;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}


// Prueba clase Persona

let persona1 = new Persona('Diana', 'Beltran', 19);
console.log(persona1.toString());

let persona2 = new Persona('Camila', 'Cortez', 25);
console.log(persona2.toString());

// Prueba clase Empleado

let empleado1 = new Empleado('Brayan', 'Forero', 35, 1300000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Lucas', 'Mora', 47, 1800000);
console.log(empleado2.toString());

// Prueba clase Cliente

let cliente1 = new Cliente('Mario', 'Florez', 34, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Pedro', 'Lara', 42, new Date());
console.log(cliente2.toString());