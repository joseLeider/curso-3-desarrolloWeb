// La clase Egreso hereda de la clase Dato
class Egreso extends Dato {  

    // Se define una propiedad estática para contar los egresos creados
    static contadorEgresos = 0;  

    // Constructor de la clase Egreso
    constructor(descripcion, valor) {  
        // Llama al constructor de la clase padre (Dato) usando "super"
        super(descripcion, valor);  

        // Incrementa el contador de egresos y asigna un ID único a cada instancia
        this._id = ++Egreso.contadorEgresos;  
    }

    // Método getter para obtener el ID del egreso
    get id() {  
        return this._id;  
    }
}