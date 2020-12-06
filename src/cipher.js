const cipher = {
  //funcion que recibe argumentos
  encode(msg1, offset) {
    const textoMayusculas = msg1.toUpperCase();
    // tipo de daro que va almacenar (string vacio)
    let mensajeCifrado = "";
    for (let i = 0; i < textoMayusculas.length; i++) {
      //obteniendo c/letra
      const letra = textoMayusculas[i];
      //si letra es igual a un espacio
      if (letra === " ") {
        mensajeCifrado += " ";
        //se salta todos los comandos sig. y empieza en la sig. letra.
        continue;
      }
      //convirtiendo a num. ASCII
      const asciiValor = letra.charCodeAt();
      //hacer formula, cifra la letra
      const letraCifrada = ((asciiValor - 65 + offset) % 26) + 65;
      //prueba de consola
      console.log({ letra, asciiValor, letraCifrada });
      //cconvierte numero a letra
      mensajeCifrado += String.fromCharCode(letraCifrada);
    }
    //retorno de la funcion
    return mensajeCifrado;
  },

  decode(msg1, offset) {
    const textoMayusculas = msg1.toUpperCase();
    // tipo de daro que va almacenar (string vacio) 1°se define
    let mensajeDescifrado = "";
    for (let i = 0; i < textoMayusculas.length; i++) {
      //obteniendo c/letra
      const letra = textoMayusculas[i];
      if (letra === " ") {
        mensajeDescifrado += " ";
        //se salta todos los comandos sig. y empieza en la sig. letra.
        continue;
      }
      //convirtiendo a num. ASCII
      const asciiValor = letra.charCodeAt();
      //hacer formula, cifra la letra
      const letraDescifrada = ((asciiValor + 65 - offset) % 26) + 65;
      //prueba de consola
      console.log({ letra, asciiValor, letraDescifrada });
      //cconvierte numero a letra 2°se usa
      mensajeDescifrado += String.fromCharCode(letraDescifrada);
    }
    //retorno de la funcion 3°se retorna
    return mensajeDescifrado;
  },
};

/* Formula del cifrado cesar
  (x+n)%26
  codigo ASCII 
  (x[numero de la letra en la posicion del codigo ASCII]-65+n)%26+65
*/
export default cipher;
