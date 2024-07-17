const desktopImage = document.getElementById('desktopImage');
const imageInput = document.getElementById('imageInput');

function cargarImagen() {
    const file = imageInput.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        desktopImage.src = imageUrl;
    }
}