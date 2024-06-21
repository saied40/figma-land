const menuBtn = document.getElementById("menubar-btn");
const menubar = document.getElementById("menubar");

// console.log(menubar.style.setProperty("background-color", "yellow"));

menuBtn.addEventListener("click", _ => {
  menuBtn.classList.toggle("open");
  menubar.style.setProperty("left", menuBtn.classList.contains("open") ? "0" : "110%");
  // TODO try to animate the navbar opening from left 100% to 0%
  // let animation = `merge-nav 2s linear ${menuBtn.classList.contains("open") ? "alternate" : "alternate-reverse"} forwards`;
  // menubar.style.setProperty("animation", animation);
});
