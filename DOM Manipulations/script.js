// element.innerHTML
// element.style.<property>
// element.setAttribute()
// element.classList.add

// const judul = document.getElementById('judul');
// judul.innerHTML = 'Rizwan Gustama';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello world!';

// const judul = document.querySelector('#judul');

// judul.style.color = 'darktblue';
// judul.style.backgroundColor = 'salmon';

const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('style', 'color: red;')

const a = document.querySelector('section#a a');