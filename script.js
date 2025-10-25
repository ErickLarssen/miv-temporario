'use strict';

// Função de alternância de elemento
const elementoToggleFunc = function (elem) {elem.classList.toggle("active");}

// Variáveis da Barra lateral
const barraLateral = document.querySelector("[data-sidebar]");
const barraLateralBtn = document.querySelector("[data-sidebar-btn]");

// Funcionalidade de alternância da barra lateral para dispositivos móveis

barraLateralBtn.addEventListener("click", function () {elementoToggleFunc(barraLateral);});

// Variáveis da Paleta de Cores
const paletaItem = document.querySelectorAll("[data-paleta-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Variáveis da Modal da Paleta de Cores
const modalImg = document.querySelector("[data-modal-img]");
const modalTitulo = document.querySelector("[data-modal-titulo]");
const modalTexto = document.querySelector("[data-modal-texto]");

// Função de alternância da modal
const paletaModalFunc = function (){
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Adicionar evento de clique à todas as modais
for (let i = 0; i < paletaItem.length; i++){
  
  paletaItem[i].addEventListener("click", function () {
    
    modalImg.src = this.querySelector("[data-paleta-image]").src;
    modalImg.alt = this.querySelector("[data-paleta-image]").alt;
    modalTitulo.innerHTML = this.querySelector("[data-paleta-titulo]").innerHTML;
    modalTexto.innerHTML = this.querySelector("[data-paleta-texto]").innerHTML;
    
    paletaModalFunc();
  })
}

// Adicionar evento de clique ao botão de fechamento modal

modalCloseBtn.addEventListener("click", paletaModalFunc);
overlay.addEventListener("click", paletaModalFunc);