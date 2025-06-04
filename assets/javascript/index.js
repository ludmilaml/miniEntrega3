function verMasYMenos() {
  const checkboxLabel = document.querySelector(".main-contacto-checkbox-label");
  const verMasElement = document.querySelector(".ver-mas-link");
// const textoCompleto = checkboxLabel.textContent;
  const textoCompleto = checkboxLabel.innerHTML;
  const textoCorto = textoCompleto.substring(0, 150) + "...";

  checkboxLabel.textContent = textoCorto;
  checkboxLabel.appendChild(verMasElement);

  verMasElement.addEventListener("click", function (e) {
    e.preventDefault();

    checkboxLabel.innerHTML = textoCompleto;
    checkboxLabel.appendChild(verMasElement);
  });
}

document.addEventListener("DOMContentLoaded", verMasYMenos);