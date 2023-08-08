class Arreglos{
    mayor(){
      let num=document.getElementById("num").value
      let numeros=num.split(";")
      let mayor=parseInt(numeros[0])
      for(let i=1;i<numeros.length;i++){
      if(mayor < parseInt(numeros[i])){
        mayor=parseInt(numeros[i])
        }
      }
      let resp = document.getElementById("resp")
      resp.textContent=`El mayor del arreglo[${numeros}] es= ${mayor}`
   }
   menor(){
    let num = document.getElementById("num").value;
    let numeros = num.split(";");
    let menor = parseInt(numeros[0]);
  
    for (let i = 1; i < numeros.length; i++) {
      if (menor > parseInt(numeros[i])) {
        menor = parseInt(numeros[i]);
      }
    }
    let resp = document.getElementById("resp");
    resp.textContent = `El menor del arreglo [${numeros}] es = ${menor}`;
  }
    promedio(){
    let num = document.getElementById("num").value;
    let numeros = num.split(";");
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += parseInt(numeros[i]);
    }
  
    let promedio = suma / numeros.length;
    let resp = document.getElementById("resp");
    resp.textContent = `El promedio es: ${promedio}`;
  }
  nombrealreves(){
    let nombres = document.getElementById("nombres").value
    let nombresArray = nombres.split(" ")
    let nombresInvertidos = []
    let resp = document.getElementById("resp")
    for (let i = 0; i < nombresArray.length; i++) {
       let nombreInvertido = nombresArray[i].split("").reverse().join("")
       nombresInvertidos.push(nombreInvertido)
    }
    resp.textContent = `El nombre invertido es: ${nombresInvertidos.join("\n")}`
   }
 
adivinar() {
  let num = parseInt(document.getElementById("num").value); // Obtener el número ingresado por el usuario
  let numr = []; // Arreglo para almacenar los números aleatorios
  for (let i = 0; i < 100; i++) {
    numr.push(Math.floor(Math.random() * 100)); // Generar números aleatorios y agregarlos al arreglo
  }
  let resp = document.getElementById("resp"); // Elemento donde se mostrará la respuesta

  let arregloVertical = numr.join('\n'); // Unir elementos del arreglo con salto de línea

  if (numr.includes(num)) {
    // Si el número ingresado está en el arreglo
    resp.textContent = ` FELICIDADES Adivinaste el número ,está en la posición ${numr.indexOf(num)}.  \n[${arregloVertical}]`;
  } else {
    // Si el número ingresado no está en el arreglo
    resp.textContent = `ERROR, no encontraste el número.  \n[${arregloVertical}]`;
  }
  }
  base2_10(){
  let num = document.getElementById("num").value
  let decimal=0
  for(let i=0;i<num.length;i++){
  let digit=parseInt(num[i])
  decimal=decimal*2+digit
  let resp=document.getElementById("resp")
  resp.textContent=`su numero decimal es ${decimal}`
  }
  }
  base10(){
    let datos=document.getElementById("datos").value
    let numeros = datos.split("").reverse();
    let binario = "";
  
    if (datos === 0) {
      binario = "0"; // Caso especial si el número es 0
    } else {
      while (datos > 0) {
        let digito = datos % 2; // Obtenemos el último dígito binario
        binario = digito + binario; // Agregamos el dígito al comienzo del número binario
        datos = Math.floor(datos / 2); // Dividimos el número decimal entre 2
      }
    }
  
    let resp = document.getElementById("resp");
    resp.textContent = `El número en base 2 es=${binario}`;
  }
  acuDivisores(num){
    let acu=0
    for(let c=1;c<num;c++){
       if (num%c==0){
           acu=acu+c
       }
    }
    return acu //1+3=4
 }
 sumaDivisores(){
   //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
   let datos= document.getElementById("datos").value
   let numeros = datos.split(";") //["4","6","9","10"]
   let acu,num=0,resultado=""
   // recorre cada elemento del arreglo
   for(let i=0;i < numeros.length;i++){
       // proceso de suma de divisores
       num=parseInt(numeros[i])
       acu=this.acuDivisores(num)
       resultado=resultado+acu+"|"    //""+"3"="3"+"|"+"6"="3|6"
   }
   let resp = document.getElementById("resp")
   resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`   
 }
 perfectos(){
  //[4,6,9,10]=1+2=3,1+2+3=6,1+3=4,1+2+5=8
  let datos= document.getElementById("datos").value
  let numeros = datos.split(";") //["4","6","9","10"]
  let acu,num=0,resultado=""
  // recorre cada elemento del arreglo
  for(let i=0;i < numeros.length;i++){
      // proceso de suma de divisores
      num=parseInt(numeros[i])
      acu=this.acuDivisores(num)
      if (acu==num){
         resultado=resultado+num+"|"    //""+"3"="3"+"|"+"6"="3|6"
      }
   }
  let resp = document.getElementById("resp")
  resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`

}
    arre_primo(){
      let num = document.getElementById('num').value;
    let resp = document.getElementById('resp');
    let numeros =num.split(";")
    let contadorPrimos = 0;
    for (let i = 0; i < numeros.length; i++){
      let primo = true;
      if (numeros[i] <= 1) {
        primo = false;
      }
      for (let j = 2; j * j <= numeros[i]; j++) {
        if (numeros[i] % j === 0) {
          primo = false;
          break;
        }
      }
      if (primo) {
        contadorPrimos++;
      }
    }

    resp.textContent = `La cantidad de números primos en el arreglo es: ${contadorPrimos}`;
    //console.log("La cantidad de números primos en el arreglo es",contadorPrimos);
      
    }

    buscarArreglo() {
      let datos = document.getElementById("datos").value
      let arreglo =datos.split(";")
      let buscado =document.getElementById("buscado").value
      let c = 0, enc = false
      //arr=[10,20,30,50]  buscado=60
      while (c < arreglo.length && enc == false) {
        if (arreglo[c].toLowerCase() == buscado.toLowerCase()){
          enc = true
        }
        else {
          c = c + 1
        }
      }
      let resp = document.getElementById("resp")
      if (enc == true) {
        //console.log(buscado, "se encuentra en la pos: ",c)
        resp.textContent = `el dato: ${buscado} se encuentra en la posicion:${c} del arreglo$${JSON.stringify(arreglo)}`
      } else {
        //console.log(buscado," no se encuentra")
        resp.textContent = `el dato: ${buscado} no se encuentra en el arreglo${JSON.stringify(arreglo)}`
      }
    }
    repite() {
      let arreglo=document.getElementById("arreglo").value
      let num=document.getElementById("num").value
      let array=arreglo.split(";")
      let resp=document.getElementById("resp")
      let contar = 0;
    for (let i = 0; i < array.length; i++) {
    if (array[i]===num) {
    contar=contar+1;
    }
    }

    resp.textContent=`el numero ${num} aparece ${contar} veces en el arreglo `
      //console.log(`El número ${numero} aparece ${contar} veces en el arreglo.`)
      }

    insertar(){
      let arregloStr = document.getElementById("arreglo").value;
      let datoInsertar = parseInt(document.getElementById("datoInsertar").value);
      let posicionInsertar = parseInt(document.getElementById("posicionInsertar").value);
      let resp = document.getElementById("resp");
      
      let arreglo = arregloStr.split(',').map(item => parseInt(item.trim()));

      if (posicionInsertar >= 0 && posicionInsertar <= arreglo.length) {
          arreglo.splice(posicionInsertar, 0, datoInsertar);
          resp.textContent = `Arreglo resultante: [${arreglo.join(', ')}]`;
      } else {
          resp.textContent = `La posición para insertar no es válida. Arreglo actual: [${arreglo.join(', ')}]`;
      }
  }
    eliminar() {
        let arregloStr = document.getElementById("arreglo").value;
        let datoEliminar = parseInt(document.getElementById("datoEliminar").value);
        let resp = document.getElementById("resp");
        
        let arreglo = arregloStr.split(',').map(item => parseInt(item.trim()));

        let indice = arreglo.indexOf(datoEliminar);
        if (indice !== -1) {
            arreglo.splice(indice, 1); // Eliminar el elemento en el índice encontrado
            resp.textContent = `Arreglo resultante: [${arreglo.join(', ')}]`;
        } else {
            resp.textContent = `El dato no fue encontrado en el arreglo. Arreglo actual: [${arreglo.join(', ')}]`;
        }
    }
    calcularVuelto() {
      let costo = parseFloat(document.getElementById("costo").value);
      let pago = parseFloat(document.getElementById("pago").value);
      let resp = document.getElementById("resp");
      if (pago < costo) {
          resp.textContent = "Falta dinero";
      } else if (costo === pago) {
          resp.textContent = "Gracias por la compra, está completo, no hay vuelto.";
      } else {
          let vuelto = (pago - costo).toFixed(2);  // Redondeamos a 2 decimales
          let billetes = [50, 20, 10, 5, 1];
          let resultado = [];
          let vueltoDolares = Math.floor(vuelto); // Parte entera del vuelto
          let vueltoCentavos = Math.round((vuelto - vueltoDolares) * 100); // Centavos del vuelto
          for (let i = 0; i < billetes.length; i++) {
              if (vueltoDolares >= billetes[i]) {
                  let cantBilletes = Math.floor(vueltoDolares / billetes[i]);
                  resultado.push(`${cantBilletes} de $${billetes[i]}`);
                  vueltoDolares = vueltoDolares % billetes[i];
              }
          }
          if (vueltoCentavos > 0) {
              resultado.push(`${vueltoCentavos} ctvos`);
          } 
          resp.textContent = `Vuelto: ${resultado.join(", ")}`;
      }
    }
    calcularPromedio() {
      let nombres = document.getElementById("nombres").value.split(",");
      let horas = document.getElementById("horas").value.split(",").map(parseFloat);
      let pagosPorHora = document.getElementById("pagoPorHora").value.split(",").map(parseFloat);

      let empleadosData = [];

      for (let i = 0; i < nombres.length; i++) {
        empleadosData.push({
          nombre: nombres[i].trim(),
          vh: horas[i],
          pago: pagosPorHora[i]
        });
      }

      let totalSueldos = 0;

      for (let i = 0; i < empleadosData.length; i++) {
        let sueldo = empleadosData[i].vh * empleadosData[i].pago;
        totalSueldos += sueldo;
      }

      let promedioSueldos = totalSueldos / empleadosData.length;

      let resultadoDiv = document.getElementById("resp");
      resultadoDiv.textContent = `El promedio de sueldos es: ${promedioSueldos}`;
    }
  }
  
  const arr = new Arreglos()
  //arr.mayor()