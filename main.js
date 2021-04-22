const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.innerHTML = 'Rizwan Gustama';

// const p1 = document.getElementsByClassName('p1')[0];
// p1.style.fontWeight = 'bold';

// const p = document.getElementsByTagName('p');
// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'lightblue';
// }





const p = document.querySelectorAll('p');
for( let i = 0; p.length; i++ ) {
    p[i].style.backgroundColor = 'lightblue';
}
// p[2].style.backgroundColor = 'lightblue';
