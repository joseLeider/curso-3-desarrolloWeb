class Persona {

    // Atributos estáticos son ideales para datos que son comunes a todas las instancias, como un contador de objetos creados.
    // En este caso, Persona.contadorObjetosPersona cuenta cuántos objetos Persona o derivados (Empleado) han sido creados.

    // Sirve para contar cuántas instancias se han creado de Persona o de sus clases derivadas (como Empleado).
    static contadorObjetosPersona = 0; // Definimos un atributo estatico que solo pertenecera a la clase y no al objeto

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++; // Incrementa el contador cada vez que se crea una instancia
        console.log('Se incrementa contador: '+ Persona.contadorObjetosPersona);
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

    toString(){
       return this.nombreCompleto();
    }


    // Un método static en JavaScript sirve para definir funciones que pertenecen a la clase, no a las instancias.
    // Es util para realizar tareas relacionadas con la clase (como cálculos, validaciones, etc.).
    // Pueden ejecutarse sin crear objetos de la clase.

    // Métodos estáticos: No dependen de una instancia
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

let persona1 = new Persona('Jose', 'Rodriguez'); // Se incrementa contador: 1
console.log(persona1);
let empleado1 = new Empleado('Paula', 'Puentes', 'Sistemas'); // Se incrementa contador: 2
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

// Métodos estáticos
// No se puede llamar a un método estático desde una instancia
// persona1.saludar1(); // Error: saludar1 no es accesible desde una instancia

// Llamada directa a los métodos estáticos desde la clase
Persona.saludar1(); // Llama al método static de la clase Persona
Persona.saludar2(persona1); // Pasa la instancia persona1 como argumento

// Métodos estáticos también se heredan
Empleado.saludar1(); // Llama al método static heredado de Persona
Empleado.saludar2(empleado1); // Pasa la instancia empleado1 como argumento

console.log(persona1.contadorObjetosPersona); // undefined (no se puede acceder desde una instancia)
console.log(Persona.contadorObjetosPersona); // 2 (se accede desde la clase directamente)
console.log(Persona.contadorObjetosPersona);