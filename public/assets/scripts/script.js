const body = document.querySelector("body");
const darkModeToggle = document.getElementById("toggle-dark");
const header = document.querySelector("header");
const mutedText = document.querySelectorAll(".text-muted");
const texts = document.querySelectorAll("h1, h2, h3, p, a");
const logo = document.getElementById("logo");
const navbarToggle = document.querySelector(".navbar-toggler");
const legends = document.querySelectorAll(".legend");
const navItems = document.getElementById("navItems");

darkModeToggle.onchange = (e) => {
  if (e.target.checked) {
    changeToDark();
  } else {
    changeFromDark();
  }
};
function changeToDark() {
  body.classList.add("bg-dark");
  body.classList.add("color-white");
  header.classList.remove("bg-body-tertiary");
  header.classList.add("bg-dark");
  header.classList.add("color-white");
  texts.forEach((txt) => {
    txt.classList.add("text-light");
  });
  mutedText.forEach((txt) => {
    txt.classList.remove("text-muted");
    txt.classList.add("text-light");
  });
  logo.classList.add("bg-light");
  navbarToggle.classList.add("bg-light");
  legends.forEach((lgnd) => {
    lgnd.classList.add("bg-dark");
  });
}

function changeFromDark() {
  body.classList.remove("bg-dark");
  body.classList.remove("color-white");
  header.classList.remove("bg-dark");
  header.classList.add("bg-body-tertiary");
  header.classList.remove("color-white");
  texts.forEach((txt) => {
    txt.classList.remove("text-light");
  });
  mutedText.forEach((txt) => {
    txt.classList.remove("text-light");
    txt.classList.add("text-muted");
  });
  logo.classList.remove("bg-light");
  navbarToggle.classList.remove("bg-light");
  legends.forEach((lgnd) => {
    lgnd.classList.remove("bg-dark");
  });
}

window.onclick = (e) => {
  closeNavBar(e);
};
function closeNavBar(e) {
  if (
    !e.target.matches("header, header *") &&
    navItems.classList.contains("show")
  ) {
    navItems.classList.remove("show");
    navbarToggle.classList.add("collapsed");
    navbarToggle.setAttribute("aria-expanded", "false");
  }
}
