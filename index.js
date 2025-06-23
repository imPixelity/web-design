let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    navbar.classList.remove("hidden");
  } else if (currentScrollY > lastScrollY) {
    navbar.classList.add("hidden");
  }

  lastScrollY = currentScrollY;
});
