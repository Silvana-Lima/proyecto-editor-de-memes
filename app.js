// ------> UTILIDADES

const $ = (selector) => document.querySelector(selector);

// ------> VARIABLES

let body = $("body");
let header = $("header");
let btnImg = $(".btn-img");
let btnText = $(".btn-text");
let btnTheme = $(".btn-theme");
let contMeme = $("#container-meme");
let contImg = $(".cont-img");
let topText = $(".top-text");
let bottomText = $(".bottom-text");
let btnDownload = $(".btn-download");

// ------> Variables Modal imagen
let modalImg = $(".section-modal-img");
let btnCloseModalImg = $(".btn-close-img");
let url = $("#url");
let spanColorImg = $(".span-color-img");
let colorFondoMeme = $("#color-background-meme");
let filtrosfondoImg = $('#adjust-background');
let inputBrillo = $(".input-brillo");
let inputOpacidad = $(".input-opacidad");
let inputContraste = $(".input-contraste");
let inputDesenfoque = $(".input-desenfoque");
let inputEscGrises = $(".input-grises");
let inputSepia = $(".input-sepia");
let inputHue = $(".input-hue");
let inputSaturado = $(".input-saturado");
let inputNegativo = $(".input-negativo");
let resetearFiltrosImg = $(".btn-reset-img");

// ------> Variables Modal texto

let modalText = $(".section-modal-text");
let btnCloseModalText = $(".btn-close-text");
let inputTextTop = $("#input-txt-top");
let inputTextBottom = $("#input-txt-bottom");
let spanColorText = $(".span-color-text");
let spanColorBackText = $(".span-color-background-text");
let inputSinTextoSuperior = $("#top-text-none");
let inputSinTextoInferior = $("#bottom-text-none");
let opcionesFuente = $('#fonts');
let tamanioDeFuente = $('#input-font-size');
let alinearTextoIzquierda = $('.aling-left');
let alinearTextoCentro = $('.aling-center');
let alinearTextoDerecha = $('.aling-rigth');
let colorTextoMeme = $('#input-color-text');
let colorFondoTextoMeme = $('#input-background-text');
let fondoTransparente = $('#fondo-transparente');
let sinContorno = $('.btn-outline-none');
let contornoClaro = $('.btn-outline-ligth');
let contornoOscuro = $('.btn-outline-dark');
let espaciado = $('.espaciado');
let interlineado = $('#line-spacing');

// ------> FUNCIONES

let ingresarFiltros = () => {
  let brillo = inputBrillo.value;
  let opacidad = inputOpacidad.value;
  let contraste = inputContraste.value;
  let desenfoque = inputDesenfoque.value;
  let escalaDeGrises = inputEscGrises.value;
  let sepia = inputSepia.value;
  let hue = inputHue.value;
  let saturado = inputSaturado.value;
  let negativo = inputNegativo.value;

  contImg.style.filter = `brightness(${brillo}) opacity(${opacidad}) contrast(${contraste}%) blur(${desenfoque}px) grayscale(${escalaDeGrises}%) sepia(${sepia}%) hue-rotate(${hue}deg) saturate(${saturado}%) invert(${negativo}%)`;
};

let restablecerFiltros = () => {

  inputBrillo.value = 1;
  inputOpacidad.value = 1;
  inputContraste.value = 100;
  inputDesenfoque.value = 0;
  inputEscGrises.value = 0;
  inputSepia.value = 0;
  inputHue.value = 0;
  inputSaturado.value = 100;
  inputNegativo.value = 0;

  ingresarFiltros();
};

let cambiarColor = ()=>{
  let fondoMeme = colorFondoMeme.value;
  let fondoTextoMeme = colorFondoTextoMeme.value;
  let colorDeTextoMeme = colorTextoMeme.value;
  
  contImg.style.backgroundColor = fondoMeme;
  spanColorImg.innerText = fondoMeme;
  contMeme.style.backgroundColor = fondoTextoMeme;
  spanColorBackText.innerText = fondoTextoMeme;
  contMeme.style.color = colorDeTextoMeme;
  spanColorText.innerText = colorDeTextoMeme;
  }

let descargarMeme = ()=>{
  domtoimage.toBlob(contMeme)
    .then(function (blob) {
        saveAs(blob, 'my-meme.png');
    });
};

// ------> EVENTOS

// ------> Modo Oscuro

btnTheme.addEventListener("click", () => {
  header.classList.toggle("darkMode");
  body.classList.toggle("darkModeBody");
  contImg.classList.toggle("darkMode");
  btnText.classList.toggle("darkMode");
  btnImg.classList.toggle("darkMode");
  btnTheme.classList.toggle("darkMode");
  btnDownload.classList.toggle("darkMode");
  modalImg.classList.toggle("darkMode");
  modalText.classList.toggle("darkMode");
  spanColorImg.classList.toggle("darkModeSpan");
  spanColorText.classList.toggle("darkModeSpan");
  spanColorBackText.classList.toggle("darkModeSpan");

  if (btnTheme.innerText.includes("Oscuro")){
    btnTheme.innerHTML = `<i class="fa-regular fa-lightbulb"></i> Modo Claro`
    colorFondoMeme.value = 'var(--colorHeaderDarkMode)';
    spanColorImg.innerText = colorFondoMeme.value;
  } else{
    btnTheme.innerHTML = `<i class="fa-regular fa-lightbulb"></i> Modo Oscuro`
    colorFondoMeme.value = "#98a8f8";
    spanColorImg.innerText = colorFondoMeme.value;

  }
});

// ------> Abrir modal imagen

btnImg.addEventListener("click", () => {
  modalImg.classList.remove("oculto");
  modalText.classList.add("oculto");
});

// ------> Cerrar modal imagen

btnCloseModalImg.addEventListener("click", () => {
  modalImg.classList.add("oculto");
});

// ------> Insertar imagen ingresada

url.addEventListener("change", (event) => {
  let urlImagen = event.target.value;

  contImg.style.backgroundImage = `url(${urlImagen})`;
});

// ------> Cambiar color de fondo meme

colorFondoMeme.addEventListener('input', cambiarColor)
colorFondoTextoMeme.addEventListener('input', cambiarColor)
colorTextoMeme.addEventListener('input', cambiarColor)

// ------> Cambiar mezcla de fondo meme

filtrosfondoImg.addEventListener('change', (event)=>{
  let ajustarFondo = event.target.value;

switch (ajustarFondo) {
  case "ninguno":
    contImg.style.backgroundBlendMode = "normal";
    break;
  case "aclarar":
    contImg.style.backgroundBlendMode = "lighten";
    break;
  case "oscurecer":
    contImg.style.backgroundBlendMode = "darken";
    break;
  case "diferencia":
    contImg.style.backgroundBlendMode = "difference";
    break;
  case "luminosidad":
    contImg.style.backgroundBlendMode = "luminosity";
    break;
  case "multiplicar":
    contImg.style.backgroundBlendMode = "multiply";
}

})

// ------> Cambiar filtros de imagen

inputBrillo.addEventListener("change", ingresarFiltros);
inputOpacidad.addEventListener("change", ingresarFiltros);
inputContraste.addEventListener("change", ingresarFiltros);
inputDesenfoque.addEventListener("change", ingresarFiltros);
inputEscGrises.addEventListener("change", ingresarFiltros);
inputSepia.addEventListener("change", ingresarFiltros);
inputHue.addEventListener("change", ingresarFiltros);
inputSaturado.addEventListener("change", ingresarFiltros);
inputNegativo.addEventListener("change", ingresarFiltros);

// ------> Reestablecer filtros de imagen

resetearFiltrosImg.addEventListener("click", restablecerFiltros);


// ------> Abrir modal texto

btnText.addEventListener("click", () => {
  modalText.classList.remove("oculto");
  modalImg.classList.add("oculto");
});

// ------> Cerrar modal texto

btnCloseModalText.addEventListener("click", () => {
  modalText.classList.add("oculto");
});

// ------> Agregar texto en meme

inputTextTop.addEventListener("input", (event) => {
  let textInput = event.target.value;

  topText.innerText = textInput;
});

inputTextBottom.addEventListener("input", (event) => {
  let textInput = event.target.value;

  bottomText.innerText = textInput;
});

// ------> Suprimir texto en meme

inputSinTextoSuperior.addEventListener("click", () => {

  topText.classList.toggle("oculto");

});

inputSinTextoInferior.addEventListener("click", () => {
  bottomText.classList.toggle("oculto");
});

// ------> Seleccionar tipo de fuente

opcionesFuente.addEventListener('change', (event)=>{
  let fuenteSeleccionada = event.target.value;

  contMeme.style.fontFamily = fuenteSeleccionada;

});

// ------> Seleccionar tama??o de fuente

tamanioDeFuente.addEventListener('input', (event)=>{
  let tamanioElegido = event.target.value;

  contMeme.style.fontSize = `${tamanioElegido}px`;
})

// ------> Alinear texto

alinearTextoIzquierda.addEventListener('click', (event)=>{

  topText.style.textAlign = 'left';
  bottomText.style.textAlign = 'left';
})

alinearTextoCentro.addEventListener('click', (event)=>{

  topText.style.textAlign = 'center';
  bottomText.style.textAlign = 'center';
})

alinearTextoDerecha.addEventListener('click', (event)=>{

  topText.style.textAlign = 'right';
  bottomText.style.textAlign = 'right';
})


// ------> Fondo de texto transparente

fondoTransparente.addEventListener('click', ()=>{

if (fondoTransparente.checked){
  contMeme.style.backgroundColor = "transparent";
} else{
  contMeme.style.backgroundColor = colorFondoTextoMeme.value;
}

})


// ------> Contorno de texto


contornoClaro.addEventListener('click', (event)=>{

 contMeme.classList.add("contornoClaroTexto");
 contMeme.classList.remove("contornoOscuroTexto");

})

contornoOscuro.addEventListener('click',  (event)=>{

  contMeme.classList.add("contornoOscuroTexto");
  contMeme.classList.remove("contornoClaroTexto");
 
 }) 


 sinContorno.addEventListener('click', (event)=>{

  contMeme.classList.remove("contornoOscuroTexto");
  contMeme.classList.remove("contornoClaroTexto");
 
 }) 

// ------> Espaciado Texto

espaciado.addEventListener('input', (event)=>{
  let espaciadoElegido = event.target.value;

  topText.style.padding = `${espaciadoElegido}px`;
  bottomText.style.padding = `${espaciadoElegido}px`;
})

// ------> Interlineado de Texto


interlineado.addEventListener('change', (event)=>{
  let interlineadoElegido =event.target.value;

  topText.style.lineHeight = interlineadoElegido;
  bottomText.style.lineHeight = interlineadoElegido;

})

  // ------> Descargar meme

  btnDownload.addEventListener("click", descargarMeme);