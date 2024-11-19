document.getElementById('registroForm').addEventListener('submit', function(event){
    alert("llega linea 2");
    let nombre = document.getElementById('nombre').value.trim();
    let correo = document.getElementById('correo').value.trim();
   // let imagen = document.getElementById('imagen').value();

    alert("llega linea 6");
    console.log("esta es la captura");
    console.log(nombre);

    if(nombre==""){
        alert('Por favor, completa todos los campos obligatorios.');
        event.preventDefault();
        return;
    }


});

function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
    }