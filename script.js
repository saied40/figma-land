const menuBtn = document.getElementById("menubar-btn");
const menubar = document.getElementById("menubar");

menuBtn.addEventListener("click", _ => {
  menuBtn.classList.toggle("open");
  menubar.style.setProperty("left", menuBtn.classList.contains("open") ? "0" : "110%");
});
