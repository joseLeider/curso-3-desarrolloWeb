class Persona {

    static contadorPersonas = 0; // Atributo estático: cuenta todas las instancias creadas (incluidas clases derivadas)

    // Método estático con acceso de solo lectura, no puede ser modificado directamente, ya que solo tiene un getter.
    static get MAX_OBJ(){ // Constante que define el máximo de objetos permitidos
        return 5; 
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas; // Asigna un ID único si no se supera el límite
        }else{
            console.log('Se han superado el máximo de objetos permitidos');
        }
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
    // Modificación del método nombreCompleto para incluir el ID
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    toString(){
       return this.nombreCompleto();
    }

    static saludar1(){
        console.log('Saludos desde el método static');
    }
    // Método estático con parámetros: Recibe un objeto Persona
    static saludar2(persona){
        console.log(persona.nombre); // Accede al nombre de la instancia proporcionada
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(setDepartamento){
        this._departamento = setDepartamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Dayana', 'Florez');
console.log(persona1.toString());

let empleado1 = new Empleado('Mateo', 'Correa', 'Secretario');
console.log(empleado1.toString());

let empleado2 = new Empleado('Camila', 'Vargas', 'Gerente');
console.log(empleado2.toString()); // Muestra: "3 Camila Vargas, Gerente" (ID único asignado al tercer objeto)

console.log(Persona.contadorPersonas); // Muestra: 3 (se han creado tres objetos en total)

console.log(Persona.MAX_OBJ); // Muestra: 5 (valor inicial)
Persona.MAX_OBJ = 12; // No tiene efecto porque no existe un setter (solo getter)
console.log(Persona.MAX_OBJ); // Muestra: 5 (la constante no puede modificarse)

let persona2 = new Persona('Sara', 'Mahecha'); // Se crea correctamente (ID: 4)
let persona3 = new Persona('Carlos', 'Trejo'); // Se crea correctamente (ID: 5)
let empleado3 = new Persona('Manuel', 'Rojas', 'Profesor'); // No se crea (límite alcanzado)

console.log(persona3.toString());
console.log(empleado3.toString());