const dialog = document.getElementById("skills__dialog");

document.getElementById("skills__dialog-open").addEventListener("click", () => {
  dialog.showModal();
});

document
  .getElementById("skills__dialog-close")
  .addEventListener("click", () => {
    dialog.close();
  });
