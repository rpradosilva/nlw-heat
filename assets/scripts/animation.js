const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".card__config");
const btnCloseModal = document.querySelector(".modal__close");

btnModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

function openModal() {
  gsap.to(modal, 0.25, { autoAlpha: 1 });
}

function closeModal() {
  gsap.to(modal, 0.25, { autoAlpha: 0 });
}

const avatarLogo = document.querySelector(".card__avatar-logo img");

gsap.fromTo(
  avatarLogo,
  { rotation: 360 },
  { rotation: 0, duration: 10, ease: "none", repeat: -1 }
);
