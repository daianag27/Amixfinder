/* SELECCIONA LOS INTERESES */
document.querySelectorAll('.speech-bubble').forEach(bubble => {
    bubble.addEventListener('click', () => {
        bubble.classList.toggle('selected');
    });
});


