class Cadena{
    cadena(){
        let nombre = "ana",car
        nombre ="Daniel"+"a"
        //       012345 6
        car = nombre[nombre.length-1]
        //console.table({nombre,car})
        //nombre[1]='A' // no se puede cambiar el caracter en una posicion
        //console.log(nombre[0])
        // for(let i=0;i < nombre.length;i++){
        //     console.log(nombre[i])
        // }
        let lim =nombre.length-1
        for(let i=lim;i >= 0;i--){
            console.log(nombre[i])
        }
    }
    vocales(){
        // "hola que tal"
        let frase = document.getElementById("datos").value
        let cv=0,cc=0
        for(let i=0;i < frase.length;i++){
            if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
               cv=cv+1
            }
            if (frase[i]>= 'a' && frase[i]<= 'z' ) {
               cc=cc+1
            }
        }
        console.table({cv,cc})
        let resp = document.getElementById("resp")
        resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
   }
   palabras() {
 
    let inputElement = document.getElementById("fraseInput");
      let resultadoElement = document.getElementById("resp");
      let frase = inputElement.value;
      let palabras = frase.split(" ");
    let cantidadPalabras = palabras.length;
      resultadoElement.
    textContent = `La frase "${frase}" tiene ${cantidadPalabras} palabras.`;
    }
    insertar() {
        // "hola tal"
        // que
        //  5
        // hola que tal
        let cadena = "hola tal" //document.getElementById("cadena").value
        let subcadena = " que" //document.getElementById("subcadena").value
        let posicion = 5 // parseInt(document.getElementById("posicion").value)
        let aux=""
        if (posicion >= 0 && posicion <= cadena.length){ 
            for (let i = 0; i < posicion; i++) {
                aux=aux+cadena[i]
            }
            // for (let i = 0; i < subcadena.length; i++) {
            //     aux = aux + subcadena[i]
            // }
            aux=aux+subcadena
            
            for (let i = posicion; i < cadena.length; i++) {
                aux = aux + cadena[i]
            }
             cadena=aux
             console.log(cadena)
             //let resp = document.getElementById("resp")
             //resp.textContent = `cadena nueva:= ${cadena}`
        }
        else{
            alert("la posicion no es valida")
        }

    }
    caracterespecial(){
        let palabra=document.getElementById("palabra").value
        let cct=0
        for(let i=0 ;i<palabra.length;i++){
        if(palabra[i]=="." || palabra[i]==","|| palabra[i]==";" ||palabra[i]==":"){
        cct=cct+1
        }
        }
        let resp=document.getElementById("resp")
        resp.textContent=`la cantidad de caracter especiales son: ${cct}`
      }
      fraseigual(){
        let palabra=document.getElementById("palabra").value
        let palabrad=""
        let resp=document.getElementById("resp")
        for(let i=palabra.length-1;i>=0 ;i--){
        palabrad+=palabra[i]
        }
        if(palabra==palabrad){ 
        resp.textContent=`se leen iguales de inicio a fin `
        }else{
          resp.textContent=`no se leen iguales de inicio a fin `;
        }
        }
        invertida(){
            /* let palabra="hola"
             let invertida= ""
             for(let i=palabra.length-1;i>=0;--i){
               invertida+=palabra[i]
               }
           console.log(invertida);*/
           let palabra=document.getElementById("palabra").value
           palabra=palabra.toString()
           let invertida=""
           for(let i=palabra.length-1;i>=0;--i){
           invertida+=palabra[i]
           }
           let resp=document.getElementById("resp")
           resp.textContent=`la frase invertida es :${invertida}`
           }
           concatenar(){
            /* let palabra=" hola"
             let letra= " que tal"
             let frase =""
             frase=palabra+letra
             console.log(frase);*/  
             let palabra= document.getElementById("palabra").value
             let frase = document.getElementById("frase").value
             let nueva= " "
             nueva = palabra.toString() +" "+ frase+""
             let resp=document.getElementById("resp")
             resp.textContent=`el resultado es : ${nueva}`
           }
           buscarsubcadena(){
            let frase = document.getElementById("frase").value;
            let buscar = document.getElementById("buscar").value;
            let resp = document.getElementById("resp");
            let posicion = -1;
          
            for (let i = 0; i < frase.length; i++) {
              if (frase.slice(i, i + buscar.length) === buscar) {
                posicion = i;
              }
            }
          
            if (posicion !== -1) {
              resp.textContent = `El dato: ${buscar} se encuentra en la posición: ${posicion}`;
            } else {
              resp.textContent = `El dato: ${buscar} no se encuentra en la cadena`;
            }
           }
           caracteres(){
  
            let num = document.getElementById('num')
            let resp = document.getElementById('resp');
        
            const caracteresEspeciales = /[^a-zA-Z0-9\s]/g;
            const caracteresEspecialesEncontrados = num.match(caracteresEspeciales);
        
            if (caracteresEspecialesEncontrados) {
              resp.innerHTML = 'La cantidad de caracteres especiales en la frase son: ' + caracteresEspecialesEncontrados.length;
            } else {
              resp.innerHTML = 'No se encontraron caracteres especiales en la frase.';
            }
          }          
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
            eliminar(){
                let frase = document.getElementById("frase").value;
                let eliminar = document.getElementById("eliminar").value;
            
                frase = frase.replace(eliminar, ''); // Reemplazar la subcadena con una cadena vacía
                let resp = document.getElementById("resp");
                resp.textContent = `La subcadena "${eliminar}" fue eliminada de la frase.\nLa nueva frase es: "${frase}"`;
                  }
                  convertir(){
                    let frase = document.getElementById("datos").value;
                    let arreglos = frase.split(",");
              
                    let resp = document.getElementById("resp");
                    resp.textContent = `La frase convertida en arreglo es:[${arreglos}]`;
                }
                buscaruncaracter(){
                  let frase = document.getElementById("frase").value;
                  let caracter = document.getElementById("caracter").value;
                  let resp = document.getElementById("resp");
                  let  posicion = frase.indexOf(caracter)
                  
                  if (posicion !== -1) {
                    resp.textContent = `El carácter '${caracter}' se encuentra en la posición: ${posicion}`;
                  } else {
                    resp.textContent = `El carácter '${caracter}' no se encuentra en la frase`;
                }
              }               
                suma(){
                  let frase = document.getElementById("datos").value;
                  let suma = 0;
              
              
                  for (let i = 0; i < frase.length; i++) {
                      // Verificar si el caracter es un dígito
                      if (!isNaN(frase[i])) {
                          // Convertir el dígito a un número y sumarlo
                          suma += parseInt(frase[i]);
                      }
                  }
              
                 let resp = document.getElementById("resp");
                 resp.textContent = `La suma de los dígitos en la frase es: ${suma}`;
                 }
}
let cad = new Cadena()
//cad.insertar()
