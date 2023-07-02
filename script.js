const tombol = document.querySelector(".ubah button");
const body = document.querySelector('body');

tombol.addEventListener('click', function(){
    body.classList.toggle('latar')
    
});

const acak = document.querySelector(".acak button");

acak.addEventListener('click', function(){
    const r = Math.floor (Math.random () * 256)
    const g = Math.floor (Math.random () * 256)
    const b = Math.floor (Math.random () * 256)
    body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'

});

const rangeRed = document.querySelector('input[name=merah]');
const rangegreen = document.querySelector('input[name=hijau]');
const rangeblue = document.querySelector('input[name=biru]');

const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const p3 = document.querySelector('.p3')

rangeRed.addEventListener('input', parameter);
rangegreen.addEventListener('input', parameter);
rangeblue.addEventListener('input', parameter);

//NEXT JOB //

function parameter(){
    p1.innerHTML = rangeRed.value;
    p2.innerHTML = rangegreen.value;
    p3.innerHTML = rangeblue.value;
}


rangeRed.addEventListener('input', red);
rangegreen.addEventListener('input', red);
rangeblue.addEventListener('input', red);

function red(){
    //  const r = Math.floor (Math.random () * 256)
    //  const g = Math.floor (Math.random () * 256)
    //  const b = Math.floor (Math.random () * 256)
     const r = rangeRed.value
     const g = rangegreen.value
     const b = rangeblue.value
    body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')'


}

const hapus = document.querySelector('.hapus');

hapus.addEventListener('click', function(){
    body.style.backgroundColor = 'white';
})