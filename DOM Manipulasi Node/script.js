// Manipulsi Node
// document.crasteElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentsNode.removeChild()
// parentsNode.replaceChild()


const pBaru = document.createElement('p')
const textPBaru = document.createTextNode('Paragraf baru');

// Simpan Tulisan Ke dalam Paragraf
pBaru.appendChild(textPBaru);
// Simpan PBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const pafagB = document.createElement('p');
const textFarag = document.createTextNode('Halaman Akhir');

pafagB.appendChild(textFarag);

// const selecB = document.getElementById('b');
// selecB.appendChild(pafagB);


// const linkBawah = document.createElement('p');
// const textLink = document.createTextNode('Rizwan Gustama');

// linkBawah.appendChild(textLink);

// const sB = document.getElementById('b');
// sB.appendChild(linkBawah);


// const liBaru = document.createElement('li');
// const textLi = document.createTextNode('Rizwan Gustama');

// liBaru.appendChild(textLi);


// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);


const libag2 = document.createElement('li');
const textli = document.createTextNode('Halaman Baru');

libag2.appendChild(textli);

const ul = document.querySelector('section#b ul');
const li3 = ul.querySelector('li:nth-child(3)');

ul.insertBefore(libag2,li3);


const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);



const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);

h2Baru.style.backgroundColor = 'lightgreen';
libag2.style.backgroundColor = 'lightgreen';
pBaru.style.backgroundColor = 'lightgreen';




