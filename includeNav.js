function loadNav() {
    fetch('nav.html') //gets content of nav file
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data; //insert the html into element w id nav placeholder
        });
}