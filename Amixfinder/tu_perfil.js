const storedInterests = localStorage.getItem('userInterests');
if (storedInterests) {
    const interestsElement = document.getElementById('interests');
    const parsedInterests = JSON.parse(storedInterests);
    interestsElement.textContent = parsedInterests.join(', ');
}