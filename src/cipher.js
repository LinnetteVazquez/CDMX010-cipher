const cipher = {
  //funcion que recibe argumentos
  encode(offset, msg1) {
    const textoMayusculas = msg1.toUpperCase();
    // cambiar offset de string a numero
    const desplazamiento = parseInt(offset);
    // 1°se define = tipo de dato que va almacenar (string vacio)
    let mensajeCifrado = "";
    for (let i = 0; i < textoMayusculas.length; i++) {
      //obteniendo c/letra
      const letra = textoMayusculas[i];
      //convirtiendo a num. ASCII
      const asciiValor = letra.charCodeAt();
      //valor de ascii menor 65 no es letra, o mamoy a 90 no es una letra
      if (asciiValor < 65 || asciiValor > 90) {
        //regreso al string original y me salto el procedimiento de cifrado
        mensajeCifrado += String.fromCharCode(asciiValor);
        continue;
      }
      //hacer formula, cifra la letra
      const letraCifrada = ((asciiValor - 65 + desplazamiento) % 26) + 65;
      //2°se usa = convierte numero a letra, guarda letra por letra en la misma cadena
      mensajeCifrado += String.fromCharCode(letraCifrada);
      /*prueba de consola
      console.log({ letra, asciiValor, letraCifrada, mensajeCifrado });
    */
    }
    //3°se retorna = retorno de la funcion
    return mensajeCifrado;
  },

  decode(offset, msg1) {
    const textoMayusculas = msg1.toUpperCase();
    // cambiar offset de string a numero
    const desplazamiento = parseInt(offset);
    // 1°se define = tipo de dato que va almacenar (string vacio)
    let mensajeDescifrado = "";
    for (let i = 0; i < textoMayusculas.length; i++) {
      //obteniendo c/letra
      const letra = textoMayusculas[i];
      //convirtiendo a num. ASCII
      const asciiValor = letra.charCodeAt();
      //valor de ascii menor 65 no es letra, o mayor a 90 no es una letra
      if (asciiValor < 65 || asciiValor > 90) {
        //regreso al string original y me salto el procedimiento de cifrado
        mensajeDescifrado += String.fromCharCode(asciiValor);
        continue;
      }
      //hacer formula, cifra la letra
      const letraDescifrada = ((asciiValor + 65 - desplazamiento) % 26) + 65;
      //2°se usa = convierte numero a letra
      mensajeDescifrado += String.fromCharCode(letraDescifrada);
      /*prueba de consola
      console.log({ letra, asciiValor, letraDescifrada, mensajeDescifrado });
    */
    }
    //3°se retorna = retorno de la funcion
    return mensajeDescifrado;
  },
};

/* Formula del cifrado cesar
  (x+n)%26
  codigo ASCII 
  (x[numero de la letra en la posicion del codigo ASCII]-65+n)%26+65
*/
export default cipher;
