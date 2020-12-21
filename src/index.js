import cipher from "./cipher.js";

let btnCodificar = document.getElementById("codificar");
let btnDecodificar = document.getElementById("decodificar");
let hoja1 = document.getElementById("nav");
let hoja2 = document.getElementById("resultado");
let regresar = document.getElementById("regresar");

btnCodificar.addEventListener("click", function () {
  hoja2.classList.remove("resultado");
  hoja1.style.display = "none";
  let msg1 = document.getElementById("msg1").value;
  let offset = document.getElementById("offset").value;
  document.getElementById("msgCoD").value = cipher.encode(offset, msg1);
});

btnDecodificar.addEventListener("click", function () {
  hoja2.classList.remove("resultado");
  hoja1.style.display = "none";
  let msg1 = document.getElementById("msg1").value;
  let offset = document.getElementById("offset").value;
  document.getElementById("msgCoD").value = cipher.decode(offset, msg1);
});

regresar.addEventListener("click", function () {
  hoja2.classList.add("resultado");
  hoja1.style.display = "block";
  window.location.reload();
});
