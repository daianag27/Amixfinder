// IMG DE PERFIL
const desktopImage = document.getElementById('desktopImage');
const imageInput = document.getElementById('imageInput');

function cargarImagen() {
    const file = imageInput.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        desktopImage.src = imageUrl;
    }
}

// GUARDA LOS DATOS
function guardarDatos() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('email', email);
}