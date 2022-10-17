const burger = document.querySelector(".burger");
const cross = document.querySelector(".cross");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  nav.classList.remove("hid");
});
cross.addEventListener("click", () => {
  nav.classList.add("hid");
});
