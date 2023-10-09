// rolagem

document.addEventListener('scroll', function(){
    let header = document.querySelector('.navbar-top')
    header.classList.toggle('roll', window.scrollY > 3)
})


// Modal
const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});