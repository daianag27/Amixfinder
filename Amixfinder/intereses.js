const selectedInterests = new Set();

const storedInterests = localStorage.getItem('userInterests');
    if (storedInterests) {
        const parsedInterests = JSON.parse(storedInterests);
        parsedInterests.forEach(interest => {
            const bubble = Array.from(document.querySelectorAll('.speech-bubble')).find(b => b.textContent.trim() === interest);
            if (bubble) {
                bubble.classList.add('selected');
                selectedInterests.add(interest);
        }
    });
}

const bubbles = document.querySelectorAll('.speech-bubble');
    bubbles.forEach(bubble => {
        bubble.addEventListener('click', () => {
            bubble.classList.toggle('selected');
            const interest = bubble.textContent.trim();
            if (bubble.classList.contains('selected')) {
                selectedInterests.add(interest);
            } else {
                selectedInterests.delete(interest);
        }

        localStorage.setItem('userInterests', JSON.stringify(Array.from(selectedInterests)));
    });
});