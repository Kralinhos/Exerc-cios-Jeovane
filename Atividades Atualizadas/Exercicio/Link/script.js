function loadExercise(url, element, title) {
    document.getElementById('exerciseFrame').src = url;
    document.getElementById('topBar').innerText = title;

    const links = document.getElementById('navLinks').getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    element.classList.add('active');
}

window.onload = function() {
    const firstLink = document.querySelector('#navLinks a');
    if (firstLink) {
        firstLink.click();
    }
};
