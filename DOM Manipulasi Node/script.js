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

const selecB = document.getElementById('b');
selecB.appendChild(pafagB);


const linkBawah = document.createElement('p');
const textLink = document.createTextNode('Rizwan Gustama');

linkBawah.appendChild(textLink);

const sB = document.getElementById('b');
sB.appendChild(linkBawah);


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




