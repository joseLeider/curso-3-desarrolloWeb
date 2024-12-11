class Persona {
    static contadorPersonas = 0;

    constructor(idPersona, nombre, apellido, edad){
        this._idPersona = idPersona;
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