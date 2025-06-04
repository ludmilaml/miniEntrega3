function verMasYMenos() {
  const checkboxLabel = document.querySelector(".main-contacto-checkbox-label");
  const verMasElement = document.querySelector(".ver-mas-link");
// const textoCompleto = checkboxLabel.textContent;
  const textoCompleto = checkboxLabel.innerHTML;
  const textoCorto = textoCompleto.substring(0, 150) + "...";

  checkboxLabel.textContent = textoCorto;

  verMasElement.addEventListener("click", function (e) {
    e.preventDefault();

    checkboxLabel.innerHTML = textoCompleto;
  });
}

document.addEventListener("DOMContentLoaded", verMasYMenos);