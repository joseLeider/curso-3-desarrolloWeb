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

/* El polimorfismo significa "muchas formas" y se refiere a la capacidad de un método o función de comportarse de diferentes maneras dependiendo del objeto que lo llame. */
function determinarTipo(tipo){ // Método genérico que recibe cualquier tipo de objeto que implemente "obtenerDetalles".
    // Llama al método obtenerDetalles() del objeto "tipo" y muestra el resultado en la consola.
    console.log(tipo.obtenerDetalles());


    // El operador instanceof se utiliza para verificar si un objeto es una instancia de una clase específica o de un constructor en su cadena de prototipos.
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo.departamento);
    }else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
        console.log(tipo.departamento);
    }else if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}

let empleado1 = new Empleado('Susana', 1500000);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente('Jose', 1300000, 'Sistemas');
console.log(gerente1.obtenerDetalles());


determinarTipo(empleado1); 
// Llama al método genérico imprimir() con un objeto de tipo Empleado.
determinarTipo(gerente1);
// Llama al método genérico imprimir() con un objeto de tipo Gerente.