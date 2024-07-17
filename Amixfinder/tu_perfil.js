// MUESTRA LOS INTERESES
const storedInterests = localStorage.getItem('userInterests');
if (storedInterests) {
    const interestsElement = document.getElementById('interests');
    const parsedInterests = JSON.parse(storedInterests);
    interestsElement.textContent = parsedInterests.join(', ');
}


// MUESTRA LOS DATOS
document.getElementById('nombre').textContent = localStorage.getItem('nombre');
document.getElementById('apellido').textContent = localStorage.getItem('apellido');
document.getElementById('email').textContent = localStorage.getItem('email');