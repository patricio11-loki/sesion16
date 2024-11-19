document.getElementById('registroForm').addEventListener('submit', function(event){
    const nombre= document.getElementById('nombre').ariaValueMax.trim();
    const correo= document.getElementById('correo').ariaValueMax.trim();
    const imagen= document.getElementById('nombre').ariaValueMax.trim();


});


function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
    }