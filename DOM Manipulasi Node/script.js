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



