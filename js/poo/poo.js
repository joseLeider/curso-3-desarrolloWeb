class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    // Sobreescritura
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this.departamento}`;
    }
}

let empleado1 = new Empleado('Susana', 1500000);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente('Jose', 1300000, 'Sistemas');
console.log(gerente1.obtenerDetalles());