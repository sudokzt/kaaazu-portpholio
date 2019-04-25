document.getElementById("skills__dialog-open").addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("overlay").classList.add("active");
  document.getElementById("skills__dialog").classList.add("active");
});

document.getElementById("skills__dialog-close").addEventListener("click", e => {
  e.preventDefault();
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("skills__dialog").classList.remove("active");
});
