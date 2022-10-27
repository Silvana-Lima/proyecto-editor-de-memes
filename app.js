// ------> UTILIDADES

const $ = (selector) => document.querySelector(selector);

// ------> VARIABLES

const header = $("header");
const body = $("body");
const contImg = $(".cont-img");
const btnTheme = $(".btn-theme");
const btnText = $(".btn-text");
const btndwonload = $(".btn-download");
const btnImg = $(".btn-img");
const modalImg = $(".section-modal-img");
const modalText = $(".section-modal-text");
const btnCloseModalImg = $(".btn-close-img");
const btnCloseModalText = $(".btn-close-text");


console.log(btnCloseModalImg);

// ------> FUNCIONES

// ------> EVENTOS

btnTheme.addEventListener("click", () => {
  header.classList.toggle("darkMode");
  body.classList.toggle("darkModeBody");
  contImg.classList.toggle("darkMode");
  btnText.classList.toggle("darkMode");
  btnImg.classList.toggle("darkMode");
  btnTheme.classList.toggle("darkMode");
  btndwonload.classList.toggle("darkMode");
  modalImg.classList.toggle('darkMode');
  modalText.classList.toggle('darkMode');
});

// ------> ABRIR MODAL IMAGEN

btnImg.addEventListener("click", () => {
  modalImg.classList.remove("oculto");
  modalText.classList.add("oculto");
});

// ------> ABRIR MODAL TEXTO
btnText.addEventListener("click", () => {
  modalText.classList.remove("oculto");
  modalImg.classList.add("oculto");
});

// ------> CERRAR MODAL

btnCloseModalImg.addEventListener("click", () => {
  modalImg.classList.add("oculto");
});

btnCloseModalText.addEventListener("click", () => {
  modalText.classList.add("oculto");
});
