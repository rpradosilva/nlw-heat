const avatarLogo = document.querySelector(".card__avatar-logo img");

gsap.fromTo(
  avatarLogo,
  { rotation: 360 },
  { rotation: 0, duration: 10, ease: "none", repeat: -1 }
);
