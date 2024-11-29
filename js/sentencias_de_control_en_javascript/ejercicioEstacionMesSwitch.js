// El switch usa comparación estricta (===)

let mes = 1;
let estacion = 'Estación desconocida';

switch (mes) {// Tambien es posible usar casos de cadena en vez de números
    case 1: case 2: case 12: // Tambien es posible los multiples casos
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Valor incorrecto';
        break;
}

console.log(estacion);