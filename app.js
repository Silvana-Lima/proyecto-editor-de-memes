
// ------> MODO OSCURO

const $ = (selector)=> document.querySelector(selector);

const header = $('header');
const body = $('body');
const contImg = $('.cont-img');
const btnTheme = $('.btn-theme');
const btnText = $('.btn-text');
const btnImg = $('.btn-img');
const btndwonload =$('.btn-download')

btnTheme.addEventListener("click", ()=>{
    header.classList.toggle('darkMode');
    body.classList.toggle('darkModeBody');
    contImg.classList.toggle('darkMode');
    btnText.classList.toggle('darkMode');
    btnImg.classList.toggle('darkMode');
    btnTheme.classList.toggle('darkMode');
    btndwonload.classList.toggle('darkMode');
});




