//Función 1
function enviarDatos(){
    var form = document.getElementById('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();
    })
    console.log('Enviando formulario...');
    
    var nombre = document.getElementById('nombre');
    var appaterno = document.getElementById('appaterno');
    var apmaterno = document.getElementById('apmaterno');
    var rut = document.getElementById('rut');
    var genero = document.getElementById('genero');
    var direccion = document.getElementById('direccion');
    var correo = document.getElementById('correo');
    var telefono = document.getElementById('telefono');

    var datosUsuario = [];

    //Validar nombre
    if(nombre.value == '' || nombre.value == null){ 
        console.log('Debe rellenar el campo de nombre.');
        alert('Debe rellenar el campo de nombre.');
    }
    else{
        datosUsuario.push(nombre.value);
    }
    //Validar apellido paterno
    if(appaterno.value == '' || appaterno.value == null){
        console.log('Debe rellenar el campo de apellido paterno.');
        alert('Debe rellenar el campo de apellido paterno.');
    }
    else{
        datosUsuario.push(appaterno.value);
    }
    //Validar apellido materno
    if(apmaterno.value == '' || apmaterno.value == null){
        console.log('Debe rellenar el campo de apellido materno.');
        alert('Debe rellenar el campo de apellido materno.');
    }
    else{
        datosUsuario.push(apmaterno.value)
    }
    //Validar rut
    if(rut.value == '' || rut.value == null){
        console.log('Debe rellenar el campo de RUT.');
        alert('Debe rellenar el campo de RUT.');
    }
    else{
        datosUsuario.push(rut.value);
    }
    //Validar direccion
    if(direccion.value == '' || direccion.value == null){
        console.log('Debe rellenar el campo de dirección.');
        alert('Debe rellenar el campo de dirección.');
    }
    else{
        datosUsuario.push(direccion.value);
    }
    //Validar correo electrónico
    if(correo.value == '' || correo == null){
        console.log('Debe rellenar el campo de correo electrónico.')
        alert('Debe rellenar el campo de correo electrónico.');
    }
    else{
        datosUsuario.push(correo.value);
    }
    //Validar telefono
    if(telefono.value == '' || telefono.value == null){
        console.log('Debe rellenar el campo de teléfono.');
        alert('Debe rellenar el campo de teléfono.');
    }
    else{
        datosUsuario.push(telefono.value);
    }

    var forma = document.getElementById('form').reset();

    console.log(datosUsuario);
    console.log('Formulario enviado');
    alert('Formulario enviado con éxito');
}

