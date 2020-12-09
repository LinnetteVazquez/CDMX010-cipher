# Cifrado César

## 1. Introducción

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.

- La palabra CASA se cifra como FDVD.

- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

## 2. Proyecto

Este proyecto va dirigido a reporteros con la finalidad de que envíen información a distintas cadenas internacionales sobre situaciones que pasan en el lugar donde se encuentran.

De manera especifica va dirigido a reporteros de aquellos países donde hay conflictos internos, lo que ocasiona que se vulneren los Derechos Humanos de la sociedad, entre ello se encuentra el Derecho a la Libertad de Expresión. Por tal motivo es imposible que puedan hacer reportajes sobre los sucesos que ocurren en esos lugares, por el control del Estado sobre lo publicado.

No solo se vulnera su derecho a expresarse, sino también al haber conflictos internos, como consecuencia, las autoridades violan todos los derechos de la ciudadanía, por ende, esta aplicación es funcional para que cualquier reportero puedo codificar los reportajes realizados durante estos sucesos y enviarlos a cualquier país internacional para que puedan saber lo que sucede en el lugar y así mismo estos países internacionales enviarles mensajes que puedan ser decodificados por la aplicación.

## 3. Prototipo

- Como podemos observar encontramos la aplicación del cifrado césar
  con las distintas instrucciones en donde podemos meter un mensaje,
  al cual se le agregara un desplazamiento deseado y se le oprimirá en
  el botón cifrar.
  ![enter image description here](https://raw.githubusercontent.com/LinnetteVazquez/imagenes/master/imagen-uno.png)

- Posteriormente en la siguiente pagina podremos observar el texto
  codificado el cual se enviara a la persona, agregando el
  desplazamiento usado para codificar y así pueda decodificarlo de
  igual manera, metiendo el numero de desplazamiento requerido.
  ![enter image description here](https://raw.githubusercontent.com/LinnetteVazquez/imagenes/master/imagen-dos.png)

### Funcionalidad

1.  Introduzca el mensaje que desea codificar o decodificar como aparece en las siguientes imagenes. También agregue el desplazamiento deseado y apriete el boton.

_MENSAJE A CODIFICAR_![enter image description here](https://raw.githubusercontent.com/LinnetteVazquez/imagenes/master/introduccion-de-mensaje.png)

_MENSAJE A DECODIFICAR_
![enter image description here](https://raw.githubusercontent.com/LinnetteVazquez/imagenes/master/introduccion-de-mensaje-codif.png)

2.  Aqui se puede observar los mensajes codificado y decodificado respectivamente. Si se desea regresar a la primera pagina, se oprimira el boton regresar.

_MENSAJE CODIFICADO_![enter image description here](https://raw.githubusercontent.com/LinnetteVazquez/imagenes/master/mensaje-codificado.png)

_MENSAJE DECODIFICADO_
![enter image description here](https://raw.githubusercontent.com/LinnetteVazquez/imagenes/master/mensaje-decodificado.png)

3.  Si desea codificar o decodifcar otro mensaje solo presione el botón regresar y listo.
