class ejerc{
insertar(){
    let frase = document.getElementById("datos").value;
    let subcadena = document.getElementById("subcadena").value;
    let posicion = parseInt(document.getElementById("posicion").value);
    let resp = document.getElementById("resp");
  
    if (posicion >= 0 && posicion <= frase.length) {
      frase = frase.slice(0, posicion) + subcadena + frase.slice(posicion);
      resp.textContent = `La subcadena "${subcadena}" se insertó en la posición ${posicion} de la frase.\nLa nueva frase es: "${frase}"`;
    } else {
      resp.textContent = `La posición para insertar la subcadena no es válida.\nLa frase se mantuvo intacta: "${frase}"`;
    }
    }
}

let eje = new ejerc()