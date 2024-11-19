document.getElementById('registroForm').addEventListener('submit', function(event){
    const nombre= document.getElementById('nombre').value.trim();
    const correo= document.getElementById('correo').value.trim();
    const imagen= document.getElementById('imagen').value();

    if(!nombre=="" || correo=="" || imagen==""){
        alert('Por favor, completa todos los campos obligatorios.');
        event.preventDefault();
        return;
    }


});
function mostrarImagen(event){
    let imagen=document.getElementById('ver-imagen');
    imagen.src=URL.createObjectURL(event.target.files[0]);
    }