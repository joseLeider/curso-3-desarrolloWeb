class Empleado extends Persona{
    // Variable estática para contar el número de instancias de Empleado
    static contadorEmpleados = 0;
    
    constructor(sueldo){ // Constructor que inicializa un empleado con un sueldo.
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