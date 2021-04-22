// Dom Selection
// document.getElementById()

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Rizwan Gustama';

// document.getElementByTagName()
// -> HTMLCollections
const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor ='lightblue';

const a = document.getElementsByTagName('a');
a[0].innerHTML = 'Instagram Rizwan Gustama';

// Atau bisa menggunakan looping

for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightblue';
}


const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '45px';

// document.getElementByClassName()
// -> HTMLCollections

const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = "Ini diubah dari Javascript";



// document.querySelector()
// -> element

const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '20px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';
li2.innerHTML = 'Perubahan Rizwan Gustama';


// document.querySelectorAll()

const p = document.querySelectorAll('p');
