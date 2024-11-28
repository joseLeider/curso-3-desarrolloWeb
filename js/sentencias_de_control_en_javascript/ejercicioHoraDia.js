/*
    6am-11am - Buenos dias
    12pm-18pm - Buenas tardes
    19pm-24pm - Buenas noches
    0am-6am - Durmiendo
*/

let hora = 24;
let mensaje;
// Convierte la hora en un número si el valor es un string
let validacion = Number(hora);

// No entra en el programa si el valor no es un número
if(isNaN(validacion)){
    console.log("No es un número");
}else{// Si es un número entra en el programa
    if(hora >= 0 && hora < 6){
        mensaje = "Durmiendo";
    }else if(hora >6 && hora <= 11){
        mensaje = "Buenos dias";
    }else if(hora >= 12 && hora <= 18){
        mensaje = "Buenas tardes";
    }else if(hora >=19 && hora <= 24){
        mensaje = "Buenas noches";
    }else{
        mensaje = "No has introducido un valor valido";
    }
}

console.log(mensaje);