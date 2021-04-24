let popUpBox = document.getElementById('popUpBox');

let submit = document.getElementById('submit');

let keluar = document.getElementsByClassName('keluar')[0];

submit.addEventListener('click', function() {
    popUpBox.style.display = 'block';
});

keluar.addEventListener('click', function() {
    popUpBox.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if(event.target == popUpBox) {
        popUpBox.style.display = 'none';
    }
})