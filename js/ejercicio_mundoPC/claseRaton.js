class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}


class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}


class Monitor{

    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
       return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}


/* La agregación en clases se refiere a una relación en la que una clase (por ejemplo, Computadora) contiene referencias
a otras clases (por ejemplo, Monitor, Raton, y Teclado) como atributos. */

/* La clase Computadora no crea los objetos Monitor, Raton ni Teclado, sino que recibe instancias ya existentes en su constructor. Esto demuestra la relación de agregación. */

// Clase principal Computadora con agregación
class Computadora{

    static contadorComputadoras = 0;
    // En esta clase, se reciben objetos externos de tipo Monitor, Raton y Teclado en el constructor.
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor; // Agregación
        this._teclado = teclado; // Agregación
        this._raton = raton; // Agregación
    }

    get idComputadora(){
        return this._idComputadora;
    }

    // Cada clase auxiliar (Monitor, Raton y Teclado) tiene su propio método toString() para describir el objeto.

    // El método toString() Concatena la información de las clases auxiliares llamando a sus respectivos métodos.
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`;
    }
}


let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString());

let raton2 = new Raton('Bluetooth', 'Dell');
raton2.marca = 'HP';
console.log(raton2.toString());


let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'ACER');
console.log(teclado1.toString());
console.log(teclado2.toString());


let monitor1 = new Monitor('Asus', 14);
let monitor2 = new Monitor('Dell', 27);
console.log(monitor1.toString());
console.log(monitor2.toString());


// Crear objeto principal (Computadora) con agregación
let computadora1 = new Computadora('Asus', monitor1, raton1, teclado1);
console.log(computadora1.toString());
// console.log(`${computadora1}`); mismo resultado con template string

let computadora2 = new Computadora('Armada', monitor2, raton2, teclado2);
console.log(`${computadora2}`);