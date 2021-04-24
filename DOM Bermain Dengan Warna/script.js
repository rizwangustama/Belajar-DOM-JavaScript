const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.addEventListener('click', function() {
//    document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');


});

// Merubah warna dengan Random
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');

tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +' ,'+ b +')';
});


const sMerah = document.querySelector('input[name=sMerah]');

sMerah.addEventListener('input', function() {
    // console.log(sMerah.value);

    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

});