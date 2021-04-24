// // Cara mendengarkan events
// // 1. Event handler
// // -> Inline HTML Attribute
// // -> Element Method
// // 2. addEventListener()
// // ***********************************

// const p3 = document.querySelector('.p3');

// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }



// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;



// // 2. addEventListener()

// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');

//     const li = document.createElement('li');
//     const litext = document.createTextNode('List Baru');

//     li.appendChild(litext);
//     ul.appendChild(li);

// });

// const h1 = document.getElementById('judul');
// h1.addEventListener('click', function() {
//     const sBaru = document.querySelector('section#a');

//     const pBaru = document.createElement('p');
//     const pText = document.createTextNode('paragraf Baru');

//     pBaru.appendChild(pText);
//     sBaru.appendChild(pBaru);


// });

const p3 = document.querySelector('.p3');

p3.addEventListener('focus', function() {
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'lightgreen';
});



const input = document.querySelector('input');

input.addEventListener('focus', function() {
    input.style.backgroundColor = 'lightblue';
})

input.addEventListener('blur', function() {
    input.style.backgroundColor = 'lightblue';
})


// pop
var popUpBox = document.getElementById('popUpBox');

var button = document.getElementById('popUp');

var keluar = document.getElementsByClassName('keluar')[0];

button.addEventListener('click', function() {
    popUpBox.style.display = 'block';
});

keluar.addEventListener('click', function() {
    popUpBox.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == popUpBox) {
        popUpBox.style.display = 'none';
    }
})

