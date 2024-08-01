let button = document.querySelector(".enquiry");
let exit = document.querySelector(".x");
let modal = document.querySelector(".input-js");
let overlay = document.querySelector(".black-overlay-modal");

overlay.classList.remove("black-overlay-modal");
button.addEventListener("click", () => {
  overlay.classList.add("black-overlay-modal");
  modal.classList.add("input-js2");
  exit.addEventListener("click", () => {
    modal.classList.remove("input-js2");
    overlay.classList.remove("black-overlay-modal");
  });
});

let imageBox = document.querySelector(".images-box");
let image = document.querySelector(".images");
let overlayImg = document.querySelector(".overlayImg");

imageBox.addEventListener("click", (pointer) => {
  if (pointer.target.src !== undefined) {
    overlay.classList.add("black-overlay-modal");
    overlayImg.src = pointer.target.src;
  }

    overlay.addEventListener("click", () => {
    overlay.classList.remove("black-overlay-modal");
  });
});
