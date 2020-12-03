import cipher from './cipher.js';
let msg1 = document.getElementById("msg1");
let despazamiento = document.getElementById("desplazamiento");
let codificar = document.getElementById ("codificar");
let decodificar = document.getElementById ("decodificar");
let hoja1 = document.getElementById("nav");
let resultado= document.getElementById ("resultado")


codificar.addEventListener("click", function(){
resultado.classList.remove("resultado")
hoja1.style.display="none"
}
);


decodificar.addEventListener("click", function(){
resultado.classList.remove("resultado")
hoja1.style.display="none"
}
);



console.log(cipher);
