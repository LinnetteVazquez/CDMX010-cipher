import cipher from "./cipher.js";

let msg1 = document.getElementById("msg1").value;
let offset = document.getElementById("offset").value;
let codificar = document.getElementById("codificar");
let decodificar = document.getElementById("decodificar");
let hoja1 = document.getElementById("nav");
let resultado = document.getElementById("resultado");
let msg2 = document.getElementById("msgCoD").value;
let regresar = document.getElementById("regresar");

codificar.addEventListener("click", function () {
  resultado.classList.remove("resultado");
  hoja1.style.display = "none";
});

decodificar.addEventListener("click", function () {
  resultado.classList.remove("resultado");
  hoja1.style.display = "none";
});

regresar.addEventListener("click", function () {
  resultado.classList.add("resultado");
  hoja1.style.display = "block";
});

console.log(cipher.encode("hola mundo desciframe esta palabra", 13));
console.log(cipher.decode("BYN ZHAQB QRFPVSENZR RFGN CNYNOEN", 13));
