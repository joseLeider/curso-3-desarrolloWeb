class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}


class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto); // Agrega el producto al arreglo
        }else{
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        // Recorre cada elemento del arreglo productos
        for (let producto of this._productos) {
            // Suma el precio de cada producto al total
            totalVenta += producto.precio; // totalVenta = totalVenta + producto.precio
        }
        return totalVenta; // Devuelve el total de la venta
    }

    mostrarOrden(){
        let productosOrden = ''; // Inicializa la cadena que almacenará los detalles de los productos
        for (let producto of this._productos) {
            productosOrden += producto.toString() + ' '; // Agrega cada producto a la cadena y concatena un espacio
        }
        // Imprime los detalles de la orden
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}


let producto1 = new Producto('Pantalón', 80000);
let producto2 = new Producto('Camisa', 55000);
console.log(producto1.toString());
console.log(producto2.toString());