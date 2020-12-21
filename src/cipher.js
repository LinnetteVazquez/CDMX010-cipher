const cipher = {
  encode(offset, msg1) {
    const textoMayusculas = msg1.toUpperCase();
    const desplazamiento = parseInt(offset);
    let mensajeCifrado = "";
    for (let i = 0; i < textoMayusculas.length; i++) {
      const letra = textoMayusculas[i];
      const asciiValor = letra.charCodeAt();
      if (asciiValor < 65 || asciiValor > 90) {
        mensajeCifrado += String.fromCharCode(asciiValor);
        continue;
      }
      const letraCifrada = ((asciiValor - 65 + desplazamiento) % 26) + 65;
      mensajeCifrado += String.fromCharCode(letraCifrada);
    }

    return mensajeCifrado;
  },

  decode(offset, msg1) {
    const textoMayusculas = msg1.toUpperCase();
    const desplazamiento = parseInt(offset);
    let mensajeDescifrado = "";
    for (let i = 0; i < textoMayusculas.length; i++) {
      const letra = textoMayusculas[i];
      const asciiValor = letra.charCodeAt();
      if (asciiValor < 65 || asciiValor > 90) {
        mensajeDescifrado += String.fromCharCode(asciiValor);
        continue;
      }
      const letraDescifrada = ((asciiValor + 65 - desplazamiento) % 26) + 65;
      mensajeDescifrado += String.fromCharCode(letraDescifrada);
    }

    return mensajeDescifrado;
  },
};

export default cipher;
