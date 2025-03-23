const personas = [
    new Persona('Julían', 'Beltran'),
    new Persona('Carolina', 'Díaz')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    // Obtiene el formulario con el nombre 'forma'
    const forma = document.forms['forma'];
    // Obtiene los valores de los campos 'nombre' y 'apellido'
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        // Crea un nuevo objeto Persona con los valores ingresados
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        // Agrega la nueva persona al array 'personas'
        personas.push(persona);
        // Actualiza la lista de personas en la interfaz
        mostrarPersonas();
    }else{
        console.log('No hay información que agregar');
    }
}