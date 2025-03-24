// Definimos una función de flecha llamada mostrarReloj
const mostrarReloj = () => {
    // Creamos un objeto Date para obtener la fecha y hora actual
    let fecha = new Date();
    
    // Obtenemos la hora actual y la formateamos con la función formatoHora
    let hr = formatoHora(fecha.getHours());
    
    // Obtenemos los minutos actuales y los formateamos
    let min = formatoHora(fecha.getMinutes());
    
    // Obtenemos los segundos actuales y los formateamos
    let seg = formatoHora(fecha.getSeconds());
    
    // Insertamos la hora en el elemento con id 'hora' en formato HH:MM:SS
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    // Creamos un array con los nombres abreviados de los meses del año
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    
    // Creamos un array con los nombres abreviados de los días de la semana
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    
    // Obtenemos el día de la semana en formato numérico (0 = Domingo, 6 = Sábado)
    let diaSemana = dias[fecha.getDay()];
    
    // Obtenemos el número del día del mes
    let dia = fecha.getDate();
    
    // Obtenemos el mes actual en formato numérico (0 = Enero, 11 = Diciembre) y lo convertimos a texto
    let mes = meses[fecha.getMonth()];
    
    // Formamos la cadena de texto con el día de la semana, el día del mes y el mes
    let fechaTexto = `${diaSemana}, ${dia}, ${mes}`;
    
    // Insertamos la fecha en el elemento con id 'fecha'
    document.getElementById('fecha').innerHTML = fechaTexto;

    // Activa o desactiva la clase 'animar' en el elemento con id 'contenedor' para aplicar animaciones CSS
    document.getElementById('contenedor').classList.toggle('animar');
}

// Definimos una función de flecha llamada formatoHora que recibe una hora y la formatea
const formatoHora = (hora) => {
    // Si la hora es menor a 10, agregamos un '0' delante para mantener el formato HH:MM:SS
    if (hora < 10) {
        hora = '0' + hora;
    }
    // Retornamos la hora formateada
    return hora;
}

// Llamamos a mostrarReloj cada 1000 ms (1 segundo) para actualizar la hora en pantalla
setInterval(mostrarReloj, 1000);
